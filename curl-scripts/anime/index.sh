#!/bin/sh

API="https://intense-hamlet-48353.herokuapp.com"
URL_PATH="/animes"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
