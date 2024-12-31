# API TO GET ALL CATEGORIES / works

# Endpoint

http://testapi.cognospheredynamics.com/api/v1/cart/get-all/category
#Payload

    {
        "perPage": "7",
        "orderBy":"asc"

    }

# Output

{
"results": {
"data": [
{
"id": 1,
"name": "tea",
"image": "images/qEyV28zkV8GnoBQSIlgO1aGzHUCTNRCZlRgpy2A3.jpg"
},
{
"id": 2,
"name": "snacks",
"image": null
},
{
"id": 3,
"name": "East ckiken wing",
"image": null
},
{
"id": 4,
"name": "Lubombo",
"image": ""
},
{
"id": 5,
"name": "birds soop",
"image": "images/JIOoNXhVXF8At9OJEk8qLvETCe9K55jP9P1eWLeW.jpg"
},
{
"id": 6,
"name": "birds soop",
"image": "images/g0LCjXifS2DsMfuk1G9sAZJlIBxEfKLQQLS2yjYt.jpg"
}
],
"total": 6,
"per_page": 7,
"current_page": 1,
"last_page": 1,
"first_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/category?page=1",
"last_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/category?page=1",
"next_page_url": null,
"prev_page_url": null,
"path": "http://127.0.0.1:8000/api/v1/admin/get-all/category",
"from": 1,
"to": 6
}
}

# API TO GET SINGLE CATEGORY / working

# Endpoint

http://testapi.cognospheredynamics.com/api/v1/cart/get/category/3

# Payload

    {
        "perPage": "4",
        "relationship": "attendances",
        "orderBy":"asc"

    }

# Output

{
"data": {
"category": {
"id": 1,
"name": "tea",
"image": "images/qEyV28zkV8GnoBQSIlgO1aGzHUCTNRCZlRgpy2A3.jpg"
}
}
}

# API TO LOGIN USER / working

# Endpoint

http://testapi.cognospheredynamics.com/api/loginUser

# Payload

{
"email":"alfredkaziibwe19@gmail.com",
"password":"123456"
}

# Output

{
"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FkbWlubG9naW4iLCJpYXQiOjE3MjM4OTE1MTQsImV4cCI6MTcyMzg5NTExNCwibmJmIjoxNzIzODkxNTE0LCJqdGkiOiJRVzRXWFlVbEJyYTdTMHZrIiwic3ViIjoiMTIiLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.DA2egpXdVuWXDHcTYt34g0xu1LH6WiiXTfVhWQBtJHs",
"token_type": "bearer",
"expires_in": 3600,
"user": {
"email": "alfred@gmail.com",
"role": "admin",
"phone": "0785557587",
"name": "Kansiime Alfred",
"location": "Nakawa",
"sex": null
}
}

# API TO READ THE USER PROFILE

#Endpoint
http://127.0.0.1:8000/api/v1/user/get/user/1

# Payload

    {
        "perPage": "4",
        "relationship": "attendances",
        "orderBy":"asc"

    }

# Output

{
"data": {
"user": {
"id": 1,
"name": "Kansiime Alfred",
"phone": "0785678987",
"email": "kyomu@gmail.com",
"location": "kampala",
"image": "images/hknzzC49L9aNjiYVgAPRhHOaK6pbGznyfstFMZ29.jpg"
}
}
}

# API TO UPDATE USER

# Endpoint

http://testapi.cognospheredynamics.com/api/v1/user/update-all/user/2

# Payload

{

    "name":" Kansiime Alfred",
    "email":"alfred@gmail.com",
    "location":"Nakawa",
    "role":"admin",
    "phone":"0785557587",
    "password":"123456"

}

# Output

{
"success": true,
"message": "user data with ID 2 has been updated successfully."
}

# API TO LOGOUT USER

# Endpoint

http://127.0.0.1:8000/api/logoutUser

# Output

{
"message": "Successfully logged out"
}

# API TO GET ALL PRODUCT GALLARY / not working

# Endpoint

http://127.0.0.1:8000/api/v1/users/get-all/ProductGallary

#Payload

    {
        "perPage": "7",
        "orderBy":"asc"

    }

# Output

{
"results": {
"data": [
{
"id": 1,
"image": "images/OrM9TexgSg1qCVWgObRtvjQYtkfKdxuunjgVqpNc.jpg",
"product_id": 2
},
{
"id": 2,
"image": "images/kQOCEolXuWmQvkeSPxTnYvboCIjOO5RgsyMSM7rS.jpg",
"product_id": 1
},
{
"id": 3,
"image": "images/XMtl5blmdOk1wmUMjX6XjUnq3ltDwneynJMIUit7.jpg",
"product_id": 1
},
{
"id": 4,
"image": "images/nVSEAqJpWvnE8kARmiLP6M8iL7iNSECZKeQiQJyV.jpg",
"product_id": 1
},
{
"id": 5,
"image": "images/smCLhhbirjp1BCPocLYmafUOvuUGZy3XqpVable2.jpg",
"product_id": 2
},
{
"id": 6,
"image": "images/3x97NAuo88P9zQptkzMV0AXC1Z5AusJEN7zuDW59.jpg",
"product_id": 2
},
{
"id": 7,
"image": "images/JdcqDClzOPnvV6RuCdfgj0zloTGDTfkNxZesnCyw.jpg",
"product_id": 2
}
],
"total": 8,
"per_page": 7,
"current_page": 1,
"last_page": 2,
"first_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/ProductGallary?page=1",
"last_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/ProductGallary?page=2",
"next_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/ProductGallary?page=2",
"prev_page_url": null,
"path": "http://127.0.0.1:8000/api/v1/admin/get-all/ProductGallary",
"from": 1,
"to": 7
}
}

# API TO GET SINGLE PRODUCTGALLARY / 

# Endpoint

http://127.0.0.1:8000/api/v1/users/get/ProductGallary/1

# Payload

    {
        "perPage": "4",
        "orderBy":"asc"

    }

# Output i

{
"data": {
"ProductGallary": {
"id": 1,
"image": "images/OrM9TexgSg1qCVWgObRtvjQYtkfKdxuunjgVqpNc.jpg",
"product_id": 2
}
}
}

# API TO GET ALL PRODUCTS / works

# Endpoint

http://127.0.0.1:8000/api/v1/users/get-all/product

#Payload

    {
        "perPage": "7",
        "orderBy":"asc"

    }

# Output

{
"results": {
"data": [
{
"id": 1,
"name": "chicken wings",
"image": "images/YZCnYB6DgKuo1bMyily6NsUIXmxWukYqZCFwe8Dm.jpg",
"price": "40000",
"active": "yes",
"featured": "no",
"discount": "2000",
"description": "this product is from sweetest i have ever seen",
"category_id": 2
},
{
"id": 2,
"name": "soop wings",
"image": "images/8zRN3HDU9vhaBu4Z40MYq7mlnGYIfgRpT7gMWxJz.jpg",
"price": "40000",
"active": "yes",
"featured": "no",
"discount": "2000",
"description": "this product is from sweetest i have ever seen",
"category_id": 2
},
{
"id": 3,
"name": "soop wings",
"image": "images/2GqQ9J4wphi5g3fTH1a3T3VEe7icSsC4lwwq6Mmx.jpg",
"price": "40000",
"active": "yes",
"featured": "no",
"discount": "2000",
"description": "this product is from sweetest i have ever seen",
"category_id": 2
},
{
"id": 4,
"name": "soop wings",
"image": "images/aST67p8nmAqnzIxRXlAxws6Oiyxw5CGmICdv40iT.jpg",
"price": "40000",
"active": "yes",
"featured": "no",
"discount": "2000",
"description": "this product is from sweetest i have ever seen",
"category_id": 2
},
{
"id": 5,
"name": "soop wings",
"image": "images/hy116BKfCtReQovAIf46WzlTEDXJX3RKXqKqSepP.jpg",
"price": "40000",
"active": "yes",
"featured": "no",
"discount": "2000",
"description": "this product is from sweetest i have ever seen",
"category_id": 2
},
{
"id": 6,
"name": "soop wings",
"image": "images/PHD2uODP01NOKqh1f4XPAaFLEturEnTJpeZltnjT.jpg",
"price": "40000",
"active": "yes",
"featured": "no",
"discount": "2000",
"description": "this product is from sweetest i have ever seen",
"category_id": 2
},
{
"id": 7,
"name": "soop wings",
"image": "images/VU4Co7mSMwC8FQtBusX4UNEPamS8qSi5pBbMniLj.jpg",
"price": "40000",
"active": "yes",
"featured": "no",
"discount": "2000",
"description": "this product is from sweetest i have ever seen",
"category_id": 2
}
],
"total": 8,
"per_page": 7,
"current_page": 1,
"last_page": 2,
"first_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/product?page=1",
"last_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/product?page=2",
"next_page_url": "http://127.0.0.1:8000/api/v1/admin/get-all/product?page=2",
"prev_page_url": null,
"path": "http://127.0.0.1:8000/api/v1/admin/get-all/product",
"from": 1,
"to": 7
}
}

#

On details page when you call the product relationship will be as shown below

ProductGallary
step
ingredient

;
