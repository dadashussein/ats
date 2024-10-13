#!/bin/bash

echo "Pulling latest changes from the GitHub repository..."
git pull https://github.com/dadashussein/ats.git

echo "Building Docker image..."
docker build -t ats-app .

echo "Stopping and removing any existing container running on port 7654..."
docker ps -q --filter "publish=7654" | grep -q . && docker stop ats-app && docker rm ats-app

echo "Running the Docker container on port 7654..."
docker run -d -p 7654:8080 --name ats-app ats-app

echo "Docker container is running on port 7654"
docker ps --filter "name=ats-app"
