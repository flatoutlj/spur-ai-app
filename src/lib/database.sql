-- SPUR AI — Supabase Database Schema
-- Run this in the Supabase SQL editor at supabase.com/dashboard

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  full_name text,
  email text unique,
  avatar_url text,

  -- Business context
  business_name text,
  job_title text,
  industry text,
  ideal_client text,
  content_tone text default 'professional but conversational',
  linkedin_url text,

  -- Subscription
  plan text default 'trial' check (plan in ('trial', 'free', 'starter', 'growth', 'agency')),
  stripe_customer_id text,
  stripe_subscription_id text,
  subscription_status text,
  trial_ends_at timestamptz,

  -- Usage tracking
  posts_generated_count int default 0,
  posts_this_month int default 0,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Posts table
create table public.posts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,

  -- Content
  title text,
  content text not null,
  topic text,
  framework text,
  tone text,

  -- Status
  status text default 'draft' check (status in ('draft', 'scheduled', 'published', 'archived')),
  scheduled_for timestamptz,
  published_at timestamptz,

  -- Performance (manually entered or from LinkedIn API)
  likes int default 0,
  comments int default 0,
  reposts int default 0,
  impressions int default 0,

  -- Metadata
  character_count int,
  has_emoji boolean default false,

  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Email captures (for waitlist/newsletter)
create table public.email_captures (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  source text,
  converted_to_user boolean default false,
  created_at timestamptz default now()
);

-- Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.posts enable row level security;

-- Policies: users can only see/edit their own data
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can view their own posts"
  on public.posts for select
  using (auth.uid() = user_id);

create policy "Users can insert their own posts"
  on public.posts for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own posts"
  on public.posts for update
  using (auth.uid() = user_id);

create policy "Users can delete their own posts"
  on public.posts for delete
  using (auth.uid() = user_id);

-- Service role can insert profiles (for signup)
create policy "Service role can insert profiles"
  on public.profiles for insert
  with check (true);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger on_profiles_updated
  before update on public.profiles
  for each row execute function public.handle_updated_at();

create trigger on_posts_updated
  before update on public.posts
  for each row execute function public.handle_updated_at();

-- Create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
