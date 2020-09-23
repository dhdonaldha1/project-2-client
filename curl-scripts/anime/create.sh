#!/bin/bash

API="https://intense-hamlet-48353.herokuapp.com"
URL_PATH="/animes"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "anime": {
      "title": "'"${TITLE}"'",
      "translation": "'"${TRANSLATION}"'",
      "genre": "'"${GENRE}"'",
      "episodes": "'"${EPISODES}"'",
      "owner": "'"${OWNER}"'"
    }
  }'

echo
