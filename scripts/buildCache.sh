#!/usr/bin/env bash

# Compile contracts
yarn hardhat compile

# Disable isolatedModules and use commonjs in tsconfig
contents="$(jq '.compilerOptions.isolatedModules = false' tsconfig.json)" && \
echo "${contents}" > tsconfig.json
contents="$(jq '.compilerOptions.module = "commonjs"' tsconfig.json)" && \
echo "${contents}" > tsconfig.json

# Run build cache in all networks
yarn hardhat run --network xdai scripts/buildCache.ts
yarn hardhat run --network mainnet scripts/buildCache.ts
RESET_CACHE=1 yarn hardhat run --network rinkeby scripts/buildCache.ts
RESET_CACHE=1 yarn hardhat run --network arbitrumTestnet scripts/buildCache.ts
EMPTY_CACHE=1 yarn hardhat run --network localhost scripts/buildCache.ts
sleep 1

# Enable isolatedModules and use esnext as module in tsconfig
contents="$(jq '.compilerOptions.isolatedModules = true' tsconfig.json)" && \
echo "${contents}" > tsconfig.json
contents="$(jq '.compilerOptions.module = "esnext"' tsconfig.json)" && \
echo "${contents}" > tsconfig.json
