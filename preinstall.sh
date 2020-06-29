#!/bin/bash

if [ -n "$NPM_TOKEN" ]; then
	echo -e "registry=https://npm.pkg.github.com/lkmx\n//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc;
else
	echo "registry=https://npm.pkg.github.com/lkmx" > .npmrc;
fi
