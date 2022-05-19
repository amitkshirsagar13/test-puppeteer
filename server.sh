#!/bin/sh
Xvfb :99 -screen 0 1920x1080x16 &> xvfb.log &
export DISPLAY=:20
node server.js