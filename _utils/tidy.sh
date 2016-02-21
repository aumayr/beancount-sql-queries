#!/usr/bin/env bash

find ./_site -name "*.html" -exec tidy -config ./_utils/tidy.conf {} \;
find ./_site -name "*.css" -type f -exec /bin/sh -c "gzip -c '{}' > '{}.gz'" \;
find ./_site -name "*.html" -type f -exec /bin/sh -c "gzip -c '{}' > '{}.gz'" \;
find ./_site -name "*.js" -type f -exec /bin/sh -c "gzip -c '{}' > '{}.gz'" \;
exit
