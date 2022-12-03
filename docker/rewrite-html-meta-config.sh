#!/bin/bash

if [[ $# -lt 1 ]]; then
  echo "Usage: rewrite-html-meta-config <HTML file path>"
  exit 1
fi

INDEX_HTML=$1

env | while IFS='=' read -r name value ; do
  if [[ $name == 'FES_APP_'* ]]; then
    echo "Set: $name" = ${!name}
    sed -ri "s|(<meta name=\"${name}\")[^>]*/?>|\1 content=\"${!name}\"/>|" $INDEX_HTML
  fi
done
