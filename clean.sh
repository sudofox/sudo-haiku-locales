#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
echo "Cleaning locale files...";

for domain in $(ls $SCRIPT_DIR/messages/en_US/LC_MESSAGES/*.po | xargs -L1 basename); do
    for lang in $(ls $SCRIPT_DIR/messages/); do
        echo "=> $lang/LC_MESSAGES/$domain"
        msgcat -s --to-code=UTF-8 --no-wrap --lang=$lang $SCRIPT_DIR/messages/$lang/LC_MESSAGES/$domain -o $SCRIPT_DIR/messages/$lang/LC_MESSAGES/$domain;
    done
done

echo "Done!"