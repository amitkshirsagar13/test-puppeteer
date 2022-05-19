#!/bin/sh
Xvfb :20 >/dev/null 2>&1 &
export DISPLAY=:20
node server.js