#!/bin/env bash
npm version $1
git add .
git commit -m "升级版本"
git push