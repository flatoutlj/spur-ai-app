#!/usr/bin/env python3
"""
Push an ops update to the owner's ntfy channel AND append it to a durable local
log. ntfy.sh drops messages after ~12h, so the .jsonl file is the real history;
ntfy is just the phone notification on top of it.

The topic is a shared secret (anyone who knows it can read and post), and this
repo is PUBLIC - so the topic lives in .env.local, never in git.

Run:  python3 ops/notify.py "Title" "Message body" [tag]
"""
import json, os, subprocess, sys
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOG = os.path.join(ROOT, "ops", "activity-log.jsonl")


def topic():
    t = os.environ.get("NTFY_TOPIC")
    if t:
        return t.strip()
    env = os.path.join(ROOT, ".env.local")
    if os.path.exists(env):
        for line in open(env):
            if line.startswith("NTFY_TOPIC="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


def main():
    if len(sys.argv) < 3:
        print(__doc__.strip())
        sys.exit(2)
    title, body = sys.argv[1], sys.argv[2]
    tag = sys.argv[3] if len(sys.argv) > 3 else "white_check_mark"
    now = datetime.now(timezone.utc)

    # Durable first: the log must survive even if the network call fails.
    entry = {"ts": now.strftime("%Y-%m-%dT%H:%M:%SZ"), "title": title, "message": body, "tag": tag}
    with open(LOG, "a") as f:
        f.write(json.dumps(entry) + "\n")

    t = topic()
    if not t:
        print("logged (no NTFY_TOPIC set, nothing pushed)")
        return
    # Shell out to curl: the system Python here has no CA bundle, so urllib
    # fails SSL verification against ntfy.sh while curl works.
    cmd = [
        "curl", "-sS", "--max-time", "15",
        "-o", "/dev/null", "-w", "%{http_code}",
        "-H", "Title: " + title,
        "-H", "Tags: " + tag,
        "-H", "Priority: default",
        "--data-binary", "@-",
        "https://ntfy.sh/" + t,
    ]
    try:
        r = subprocess.run(cmd, input=body.encode(), capture_output=True, timeout=30)
        code = r.stdout.decode().strip()
        if code == "200":
            print("logged + pushed (HTTP 200)")
        else:
            print(f"logged, push FAILED (HTTP {code}) {r.stderr.decode().strip()}")
            sys.exit(1)
    except Exception as e:
        print(f"logged, push FAILED: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
