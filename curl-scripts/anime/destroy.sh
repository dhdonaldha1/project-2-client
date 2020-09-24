API="https://intense-hamlet-48353.herokuapp.com"
URL_PATH="/animes"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
