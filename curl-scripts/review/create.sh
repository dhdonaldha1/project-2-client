#!/bin/bash

API="https://intense-hamlet-48353.herokuapp.com"
URL_PATH="/animes/reviews"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "review": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'",
      "animeId": "'"${ANIME_ID}"'"
    }
  }'

echo
