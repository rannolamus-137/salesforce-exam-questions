#!/bin/sh
# Idempotent preview boot: exit if already healthy, else start via npm run dev.
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
cd /workspace
npm run dev >>/tmp/app-startup.log 2>&1 &
