#/bin/bash

for EXAMPLE in $(ls */package.json); do
    cd $(dirname $EXAMPLE)
    npm install
    cd ..
done
