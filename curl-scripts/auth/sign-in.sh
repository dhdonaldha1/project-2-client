curl "https://intense-hamlet-48353.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials":{
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
    }
  }'

echo
