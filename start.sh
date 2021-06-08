#!/bin/bash
# start.sh

export FLASK_APP=wsgi.py
export FLASK_DEBUG=0
export APP_CONFIG_FILE=config.py
source /home/pi/Desktop/chiangkhan_cocortward/.venv/bin/activate
cd /home/pi/Desktop/chiangkhan_cocortward/ && flask run
