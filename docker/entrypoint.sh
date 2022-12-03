#!/bin/sh -e

# Do some setup here
/rewrite-html-meta-config.sh /frontend/index.html

exec "$@"
