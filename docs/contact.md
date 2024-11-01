# Contact API Spec

## Create Contact

Endpoint: POST /api/contacts

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "first_name": "Kuncoro",
  "last_name": "Adji",
  "email": "kuncoroadji@gmail.com"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Kuncoro",
    "last_name": "Adji",
    "email": "kuncoroadjie@gmail.com",
    "phone": "087123123123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "first_name must no blank, ..."
}
```

## Get Contact

Endpoint: GET /api/contacts

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Kuncoro",
    "last_name": "Adji",
    "email": "kuncoroadjie@gmail.com",
    "phone": "087123123123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Contact is not found ..."
}
```

## Update Contact

Endpoint: PUT /api/contacts/:id

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "first_name": "Kuncoro",
  "last_name": "Adji",
  "email": "kuncoroadjie@gmail.com",
  "phone": "087123123123"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Kuncoro",
    "last_name": "Adji",
    "email": "kuncoroadjie@gmail.com",
    "phone": "087123123123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "first_name must no blank, ..."
}
```

## Remove Contact

Endpoint: DELETE /api/contacts/:id

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
  "errors": "Contact is not found"
}
```

## Search Contact

Endpoint: GET /api/contacts

Query Parameter :

- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email: string, contact email, optional
- page : number, default 1
- size : number, default 10

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Kuncoro",
      "last_name": "Adji",
      "email": "kuncoroadjie@gmail.com",
      "phone": "087123123123"
    },
    {
      "id": 2,
      "first_name": "Ridho",
      "last_name": "Wibowo",
      "email": "ridhowibowo@gmail.com",
      "phone": "082321321321"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized ..."
}
```
