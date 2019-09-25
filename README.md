Dev-Libs

# Back-end

# Introduction
RESTful API for Dev-Libs App

# Installation
-having a code block in your README that shows exactly what folks need to type into their shell to install your software; and
-doing this for all platforms that your software supports, if there’s a difference between them (e.g. OS X/Linux/Windows).

# Usage Examples
POST 
    Register a new user
        Endpoint:
            https://dev-libs.herokuapp.com/api/auth/register

        Body:
            {
                "username": "userOne",
                "password": "password1"
            }

        Headers:
            Content-Type: application/json

        Example Request:
            Default
                curl --location --request POST "https://dev-libs.herokuapp.com/api/auth/register" \
                    --data "{
                        \"username\": \"user\",
                        \"password\": \"password\"
                    }"
POST
    Login
        Endpoint:
            https://dev-libs.herokuapp.com/api/auth/login

        Body:
            {
                "username": "userOne",
                "password": "password1"
            }
        
        Headers:
            Content-Type: application/json

        Example Request: 
            Default
                curl --location --request POST "https://dev-libs.herokuapp.com/api/auth/login" \
                    --data "{
                        \"username\": \"user\",
                        \"password\": \"password\"
                    }"

GET 
    Get user by specified id
        Endpoint:
            https://dev-libs.herokuapp.com/api/users/:id
        
        Path Variables:
            id
        
        Example Request:
            Default
                curl --location --request GET "https://dev-libs.herokuapp.com/api/users/:id" \
                    --data ""

PUT 
    Update user by specified id
        Endpoint:
            https://dev-libs.herokuapp.com/api/users/:id
        
        Headers:
            Content-Type: application/json

        Path Variables:
            id

        Body:
            {
                "username": "updatedName",
                "password": "updatedPassword1"
            }

        Example Request: 
            Default
                curl --location --request PUT "https://dev-libs.herokuapp.com/api/users/:id" \
                    --data "{
                        \"username\": \"updatedName\",
                        \"password\": \"updated\"
                    }"

DEL
    Delete user with specified id
        Endpoint:
            https://dev-libs.herokuapp.com/api/users/:id
        
        Path Variables:
            id

        Example Request: 
            Default
                curl --location --request DELETE "https://dev-libs.herokuapp.com/api/users/:id" \
                    --data ""


GET 
    Get all templates
        Endpoint:
            https://dev-libs.herokuapp.com/api/templates

        Example Request: 
            Default
                curl --location --request GET "https://dev-libs.herokuapp.com/api/templates" \
                    --data ""


        Example Response:
            200
                [
                    {
                        "id": 1,
                        "programming_language": "bears",
                        "noun": "chirps",
                        "verb": "large",
                        "ing_verb": "bird",
                        "ed_verb": "moos",
                        "noun2": "small",
                        "user_id": 1
                    },
                    {
                        "id": 2,
                        "programming_language": "beets",
                        "noun": "chirps",
                        "verb": "tiny",
                        "ing_verb": "cow",
                        "ed_verb": "moos",
                        "noun2": "large",
                        "user_id": 1
                    },
                    {
                        "id": 3,
                        "programming_language": "battlestar_galactica",
                        "noun": "space",
                        "verb": "travel",
                        "ing_verb": "debugging",
                        "ed_verb": "flew",
                        "noun2": "solar_system",
                        "user_id": 1
                    }
                ]

GET 
    Get template by specified id    
        Endpoint:
            https://dev-libs.herokuapp.com/api/templates/:id

        Path Variables:
            id

        Example Request: 
            Default
                curl --location --request GET "https://dev-libs.herokuapp.com/api/templates/:id" \
                    --data "

POST 
    Create new template for specified user
        Endpoint:
            https://dev-libs.herokuapp.com/api/users/:id/templates

        Headers:
            Content-Type: application/json

        Path Variables:
            id
        
        Body:
            {
                "programming_language": "battlestar_galactica",
                "noun": "space",
                "verb": "travel",
                "ing_verb": "debugging",
                "ed_verb": "flew",
                "noun2": "solar_system"
            }

        Example Request: 
            Default
                curl --location --request POST "https://dev-libs.herokuapp.com/api/users/:id/templates" \
                    --data ""

PUT 
    Update template with specified id
        Endpoint:
            https://dev-libs.herokuapp.com/api/templates/:id

        Headers:
            Content-Type: application/json

        Path Variables:
            id
        
        Body:
            {
                "programming_language": "beets",
                "noun": "chirps",
                "verb": "large",
                "ing_verb": "bird",
                "ed_verb": "moos",
                "noun2": "small"
            }

        Example Request: 
            Default
                curl --location --request PUT "https://dev-libs.herokuapp.com/api/templates/:id" \
                    --data "{
                        \"programming_language\": \"battlestar_galactica\",
                        \"noun\": \"space\",
                        \"verb\": \"travel\",
                        \"ing_verb\": \"debugging\",
                        \"ed_verb\": \"flew\",
                        \"noun2\": \"solar_system\"
                    }"

        Example Response:
            200
                {
                    "id": 5,
                    "programming_language": "battlestar_galactica",
                    "noun": "space",
                    "verb": "travel",
                    "ing_verb": "debugging",
                    "ed_verb": "flew",
                    "noun2": "solar_system",
                    "user_id": 1
                    }

DEL 
    Delete template with specified id
        Endpoint:
            https://dev-libs.herokuapp.com/api/templates/:id

        Path Variables:
            id
        
        Example Request: 
            Default
                curl --location --request DELETE "https://dev-libs.herokuapp.com/api/templates/:id" \
                    --data ""


# License 
“XYZ is available under the $SoAndSo license. See LICENSE.txt for more information”. If you’re extra nice you can put a link to the license file.


# Author
Tania Keller