#!/bin/sh
#set -x

[ -z "$CDB_API_URL" ] && echo 'CDB_API_URL variable is not set' && exit 1

INIT_GUARD=/init.lock
SED_EXTENTION_REGEX="ts\|js\|json$"
NGINX_DIR=/usr/share/nginx/html

cd ${NGINX_DIR}

if [ ! -f "$INIT_GUARD" ]; then
    ENV_NAMES=$(printenv | sed -e s#=.*##)   # get names of defined environment variables.

    for var in $ENV_NAMES; do
        # get the value for the current env variable
        val=$(printenv ${var})

        # replace in every .js @{VAR} with its corresponding value.
        find . -type f | grep -i "${SED_EXTENTION_REGEX}" | xargs sed -i "s#@{$var}#${val}#g"
    done;

    # Replacement done. Do not retry it on the next run.
    touch ${INIT_GUARD}
fi

nginx -g 'daemon off;'

