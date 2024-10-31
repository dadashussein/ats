#!/usr/bin/env sh

# Ensure pnpm is in path
export PATH="$PATH:$(pwd)/node_modules/.bin"

# Build step
echo 'Building the application...'
set -x
pnpm run build
set +x

# Start dev server
echo 'Starting development server...'
set -x
# Start Vite with host flag to allow external access
pnpm run dev --host 0.0.0.0 --port 3000 &
PID=$!
echo $PID > .pidfile
set +x

echo 'Waiting for server to start...'
# Increased sleep time to ensure server is fully started
sleep 10

# Check if server is actually running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "Server failed to start"
    exit 1
fi

echo 'Application is running and accessible at:'
echo "http://$(hostname -i):3000"
echo "http://localhost:3000"