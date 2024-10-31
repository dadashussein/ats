#!/usr/bin/env sh

# Build step
echo 'Building the application...'
set -x
pnpm run build
set +x

# Start dev server
echo 'Starting development server...'
set -x
pnpm run dev &
PID=$!
echo $PID > .pidfile
set +x

echo 'Waiting for server to start...'
sleep 5

echo 'Application is running at http://localhost:3000'