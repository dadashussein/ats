#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "Building Docker image..."
sudo docker build -t ats-app .

echo "Stopping and removing any existing container named ats-app..."
sudo docker stop ats-app 2>/dev/null || true
sudo docker rm ats-app 2>/dev/null || true

echo "Running the Docker container on port 7654..."
sudo docker run -d -p 7654:8080 --name ats-app ats-app

echo "Docker container is running on port 7654"
sudo docker ps --filter "name=ats-app"