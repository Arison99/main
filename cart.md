# Api to store data in the cart

# Url

https://testapi.pearlbuddy.com/api/v1/user/post-all/user/cartdata

# body

# note in the header there should be the TOKEN

{
"user_id": "1",
"comment": "in need too much vegitables",
"products": [
{
"product_id": "101",
"quantity": 2
},
{
"product_id": "102",
"quantity": 1
},
{
"product_id": "103",
"quantity": 5
}
]
}

# Output

{
"user_id": "1",
"comment": "in need too much vegitables",
"products": [
{
"product_id": "101",
"quantity": 2
},
{
"product_id": "102",
"quantity": 1
},
{
"product_id": "103",
"quantity": 5
}
]
}
