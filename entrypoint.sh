#!/bin/sh

if [ -z "${BASE_URL}" ]; then
    echo "A variável BASE_URL não está definida."
    exit 1
fi

sed -i "s|__BASE_URL__|${BASE_URL}|g" /usr/share/nginx/html/js/main.js

nginx -g 'daemon off;'