#!/bin/env bash
git add . && \
git commit -m "升级版本" && \
npm version $1 && \
git push