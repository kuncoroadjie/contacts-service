# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "kuncoroadjie",
  "password": "tsnibos"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "kuncoroadjie",
    "name": "Kuncoro Adji",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "error": "Username or password wrong ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "kuncoroadjie",
  "password": "tsnibos",
  "name": "Kuncoro Adji"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "kuncoroadjie",
    "name": "Kuncoro Adji"
  }
}
```

Response Body (Failed) :

```json
{
  "error": "User registration failed due to [specific error message]"
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "kuncoroadjie",
    "name": "Kuncoro Adji"
  }
}
```

Response Body (Failed) :

```json
{
  "error": "Unauthorized ..."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "password": "tsnibos", // tidak wajib
  "name": "Kuncoro Adji" // tidak wajib
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "kuncoroadjie",
    "name": "Kuncoro Adji"
  }
}
```

Response Body (Failed) :

```json
{
  "error": "Unauthorized ..."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "error": "Unauthorized ..."
}
```
