#!/bin/bash
# Telegram bot long-polling listener for Spur AI Founder OS
# Polls Telegram API for new messages and writes them to inbox.txt
# Usage: ./telegram-listen.sh YOUR_BOT_TOKEN [OWNER_CHAT_ID]
# Or set TELEGRAM_BOT_TOKEN env var

BOT_TOKEN="${1:-$TELEGRAM_BOT_TOKEN}"
OWNER_CHAT_ID="${2:-$TELEGRAM_OWNER_CHAT_ID}"
INBOX="/Users/lapoldeonwilliams/spur-ai-app/.claude/inbox.txt"
OFFSET_FILE="/Users/lapoldeonwilliams/spur-ai-app/.claude/telegram_offset.txt"

if [ -z "$BOT_TOKEN" ]; then
  echo "Usage: $0 <BOT_TOKEN> [OWNER_CHAT_ID]"
  echo "Or set TELEGRAM_BOT_TOKEN environment variable"
  exit 1
fi

OFFSET=$(cat "$OFFSET_FILE" 2>/dev/null || echo "0")

echo "Telegram listener started. Waiting for messages..."
echo "Inbox: $INBOX"

while true; do
  RESPONSE=$(curl -s "https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${OFFSET}&timeout=30&allowed_updates=[\"message\"]")

  if echo "$RESPONSE" | jq -e '.ok' > /dev/null 2>&1; then
    UPDATES=$(echo "$RESPONSE" | jq -c '.result[]' 2>/dev/null)

    while IFS= read -r UPDATE; do
      [ -z "$UPDATE" ] && continue

      UPDATE_ID=$(echo "$UPDATE" | jq -r '.update_id')
      CHAT_ID=$(echo "$UPDATE" | jq -r '.message.chat.id // empty')
      FROM=$(echo "$UPDATE" | jq -r '.message.from.username // .message.from.first_name // "unknown"')
      TEXT=$(echo "$UPDATE" | jq -r '.message.text // empty')

      if [ -n "$TEXT" ]; then
        if [ -z "$OWNER_CHAT_ID" ] || [ "$CHAT_ID" = "$OWNER_CHAT_ID" ]; then
          TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
          echo "[$TIMESTAMP] @$FROM ($CHAT_ID): $TEXT" >> "$INBOX"
          echo "[$TIMESTAMP] @$FROM: $TEXT"

          # Send acknowledgment
          curl -s -X POST "https://api.telegram.org/bot${BOT_TOKEN}/sendMessage" \
            -d "chat_id=$CHAT_ID" \
            -d "text=Message received ✓ Claude is processing..." \
            > /dev/null 2>&1
        fi
      fi

      NEXT_OFFSET=$((UPDATE_ID + 1))
      echo "$NEXT_OFFSET" > "$OFFSET_FILE"
      OFFSET="$NEXT_OFFSET"
    done <<< "$UPDATES"
  fi

  sleep 1
done
