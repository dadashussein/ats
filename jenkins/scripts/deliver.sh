#!/usr/bin/env sh

# Build step
echo 'Building the application...'
set -x
pnpm run build
set +x

# Start dev server
echo 'Starting development server...'
set -x
# Modify your start command to bind to 0.0.0.0
export HOST=0.0.0.0
pnpm run dev --host 0.0.0.0 & PID=$!
echo $PID > .pidfile
set +x

echo 'Waiting for server to start...'
sleep 5

echo 'Application is running at http://your-jenkins-server-ip:3000'