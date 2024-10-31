#!/usr/bin/env sh

if [ -f .pidfile ]; then
    PID=$(cat .pidfile)
    if ps -p $PID > /dev/null 2>&1; then
        echo "Stopping process $PID..."
        kill $PID
        rm .pidfile
        exit 0
    else
        echo "Process $PID not found"
        rm .pidfile
        exit 0
    fi
else
    echo "No .pidfile found"
    exit 0
fi