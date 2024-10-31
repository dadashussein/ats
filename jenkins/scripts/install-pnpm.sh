#!/usr/bin/env sh

echo 'Installing pnpm locally...'
npm install --prefix $HOME/.local pnpm

# Add local pnpm to PATH
export PATH="$HOME/.local/node_modules/.bin:$PATH"

# Install project dependencies
echo 'Installing project dependencies...'
pnpm install