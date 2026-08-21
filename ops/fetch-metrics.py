#!/usr/bin/env python3
"""
Pulls live business metrics from Supabase and merges them into ops-status.json,
which ops-dashboard.html renders. Read-only against the DB.

Uses curl (system CA certs) — macOS system Python often can't verify Supabase's
cert chain, but curl can.

Run:  python3 ops/fetch-metrics.py
Reads Supabase creds from .env.local (NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY).
"""
import json, os, re, subprocess, sys
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATUS = os.path.join(ROOT, "ops-status.json")

# Supabase table -> friendly metric key
TABLES = {"email_captures": "email_captures", "profiles": "signups", "posts": "posts_generated"}


def load_env():
    env = {}
    path = os.path.join(ROOT, ".env.local")
    for line in open(path) if os.path.exists(path) else []:
        m = re.match(r"\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$", line)
        if m:
            env[m.group(1)] = m.group(2).strip().strip('"')
    return env


def count(base, key, table):
    url = f"{base}/rest/v1/{table}?select=*"
    try:
        out = subprocess.run(
            ["curl", "-s", "-I", "-H", f"apikey: {key}", "-H", f"Authorization: Bearer {key}",
             "-H", "Prefer: count=exact", "-H", "Range: 0-0", url],
            capture_output=True, text=True, timeout=20).stdout
        for line in out.splitlines():
            if line.lower().startswith("content-range:") and "/" in line:
                total = line.split("/")[-1].strip()
                return int(total) if total.isdigit() else None
    except Exception as e:
        print(f"  ! {table}: {e}", file=sys.stderr)
    return None


def main():
    env = load_env()
    base, key = env.get("NEXT_PUBLIC_SUPABASE_URL"), env.get("SUPABASE_SERVICE_ROLE_KEY")
    metrics = {}
    if base and key:
        for table, label in TABLES.items():
            metrics[label] = count(base, key, table)
    else:
        print("  ! Supabase creds missing in .env.local", file=sys.stderr)

    status = json.load(open(STATUS)) if os.path.exists(STATUS) else {}
    status.setdefault("metrics", {})
    status["metrics"].update({k: v for k, v in metrics.items() if v is not None})
    status["metrics_updated_at"] = datetime.now(timezone.utc).isoformat()
    json.dump(status, open(STATUS, "w"), indent=2)
    print("metrics:", metrics)


if __name__ == "__main__":
    main()
