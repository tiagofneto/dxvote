#!/usr/bin/env bash
export REACT_APP_GIT_SHA=$(echo $(git rev-parse  HEAD) | cut -c1-9)
export SKIP_PREFLIGHT_CHECK=true
yarn react-app-rewired build
