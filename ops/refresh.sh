#!/usr/bin/env bash
# Refresh the ops dashboard: pull live metrics from Supabase, then rebuild HTML.
# Usage: bash ops/refresh.sh   (run from the app root)
set -e
cd "$(dirname "$0")/.."
python3 ops/fetch-metrics.py
python3 ops/build-dashboard.py
# Keep the deployed /ops dashboard's task lists in sync with the local file.
cp ops-status.json src/data/ops-status.json
echo "Local HTML: $(pwd)/ops-dashboard.html"
echo "Live dashboard: https://www.trispur.com/ops  (commit + push src/data/ops-status.json to update task lists there)"
