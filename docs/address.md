# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:idContact/addresses

Request Header :

- X-API-TOKEN: token

Request body :

```json
{
  "street": "Jalan Dermaga",
  "city": "Kota Kediri",
  "province": "Jawa Timur",
  "country": "Indonesia",
  "postal_code": "23123"
}
```

Response body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Dermaga",
    "city": "Kota Kediri",
    "province": "Jawa Timur",
    "country": "Indonesia",
    "postal_code": "23123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required"
}
```

## Get Address

Endpoint : GET /api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN: token

Response body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Dermaga",
    "city": "Kota Kediri",
    "province": "Jawa Timur",
    "country": "Indonesia",
    "postal_code": "23123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is not found"
}
```

## Update Address

Endpoint : PUT /api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN: token

Request body :

```json
{
  "street": "Jalan Dermaga",
  "city": "Kota Kediri",
  "province": "Jawa Timur",
  "country": "Indonesia",
  "postal_code": "23123"
}
```

Response body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Dermaga",
    "city": "Kota Kediri",
    "province": "Jawa Timur",
    "country": "Indonesia",
    "postal_code": "23123"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "postal_code is required"
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN: token

Response body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Address is no found"
}
```

## List Address

Endpoint : GET /api/contacts/:idContact/addresses

Request Header :

- X-API-TOKEN: token

Response body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan Dermaga",
      "city": "Kota Kediri",
      "province": "Jawa Timur",
      "country": "Indonesia",
      "postal_code": "23123"
    },
    {
      "id": 2,
      "street": "Jalan Batalion",
      "city": "Kota Kediri",
      "province": "Jawa Timur",
      "country": "Indonesia",
      "postal_code": "12321"
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "Contact is not found"
}
```
