#!/bin/bash
# Spur AI — ntfy notification helper
# Usage: ./notify.sh "title" "message" [priority] [tags]
# Priority: urgent | high | default | low | min
# Tags: comma-separated ntfy tag names

TOPIC="spur-ai-founder-os"
TITLE="${1:-Spur AI Update}"
MESSAGE="${2:-No message provided}"
PRIORITY="${3:-default}"
TAGS="${4:-white_check_mark}"

curl -s -X POST "https://ntfy.sh/$TOPIC" \
  -d "$MESSAGE" \
  -H "Title: $TITLE" \
  -H "Priority: $PRIORITY" \
  -H "Tags: $TAGS" \
  2>/dev/null

# Save as last status for Stop hook
echo "$MESSAGE" > /Users/lapoldeonwilliams/spur-ai-app/.claude/last_status.txt
