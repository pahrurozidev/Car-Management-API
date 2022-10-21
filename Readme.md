<h1 align="center">Car Management API</h1>

<!-- <h2 align="center">Entity Relationship Diagram</h2>
<p align="center">
  <img width="460" height="300" src="">
</p> -->

# Cars Enpoints

## Get All Cars
```[ENDPOINT] /api/v1/cars```
```url
[GET] http://localhost:5000/api/v1/cars
```

#### Response body
```json
{
  "status": "OK",
  "data": {
    "cars": [
      {
        "id": 1,
        "name": "Avanza",
        "image": "avanza.jpg",
        "price": 500000,
        "size": "small",
        "type": "Off Roader",
        "createdAt": "2022-10-20T23:25:42.399Z",
        "updatedAt": "2022-10-20T23:25:42.399Z"
      },
      ...
    ]
  },
    "meta": {
      "total": 16
  }
}
```

## Get One Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[GET] http://localhost:5000/api/v1/cars/1
```

#### Response body
```json
{
  "status": "OK",
  "data": {
    "id": 1,
    "name": "Avanza",
    "image": "avanza.jpg",
    "price": 500000,
    "size": "small",
    "type": "Off Roader",
    "createdAt": "2022-10-20T23:25:43.356Z",
    "updatedAt": "2022-10-20T23:25:43.356Z"
  }
}
```

## Create Car
```[ENDPOINT] /api/v1/cars```
```url
[POST] http://localhost:5000/api/v1/cars
```

#### Request body
```json
{
  "name": String,
  "image": String,
  "price": Integer,
  "size": String,
  "type": string
}
```

#### Response body
```json
{
  "status": "OK",
  "data": {
    "id": 31,
    "name": "Avanza",
    "image": "avanza.jpg",
    "price": 500000,
    "size": "small",
    "type": "Off Roader",
    "updatedAt": "2022-10-21T00:35:40.334Z",
    "createdAt": "2022-10-21T00:35:40.334Z"
  }
}
```

## Update Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[PUT] http://localhost:5000/api/v1/cars/1
```

#### Request body
```json
{
  "name": String,
  "image": String,
  "price": Integer,
  "size": String,
  "type": String
}
```

#### Response body
```json
{
  "status": "OK",
  "message": "Car Successfully Updated"
}
```

## Delete Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[DELETE] http://localhost:5000/api/v1/cars/1
```

#### Response body
```json
{
  "status": "OK",
  "message": "Car Successfully Deleted"
}
```

# Users Enpoints

## Super Admin Credentials:
### email: superadmin@gmail.com
### password: super_admin

## Register Users
```[ENDPOINT] /api/v1/register```
```url
[POST] http://localhost:5000/api/v1/register
```

#### Request body
```json
{
  "username": String,
  "email": string,
  "password": string,
  "confPassword": string
}
```

#### Response body
```json
{
  "status": "OK",
  "message": "Register User Successfully",
  "data": {
    "id": 1,
    "username": "Pahrurozi",
    "email": "pahrurozi17@gmail.com",
    "password": "$2b$10$ulatiMgD1Bbni/GiTHxh2u7.mtmLBizoXnmn8euLIsu20oxKday0G",
    "role": "Member",
    "updatedAt": "2022-10-21T00:36:36.859Z",
    "createdAt": "2022-10-21T00:36:36.859Z",
    "refresh_token": null
  }
}
```

## Login Users
```[ENDPOINT] /api/v1/login```
```url
[POST] http://localhost:5000/api/v1/login
```

#### Request body
```json
{
  "email": string,
  "password": string
}
```

#### Response body
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoiUGFocnVyb3ppIiwiZW1haWwiOiJwYWhydXJvemkxN0BnbWFpbC5jb20iLCJpYXQiOjE2NjYzMTI2MTAsImV4cCI6MTY2NjMxMjkxMH0.4hDh2A_kDls3RoisK9ZOfM7fhTznvUKrzYkxPG2ZecU"
}
```

## Get All Users
```[ENDPOINT] /api/v1/users```
```url
[GET] http://localhost:5000/api/v1/users
```

#### Response body
```json
{
  "status": "OK",
  "data": {
    "users": [
      {
        "id": 1,
        "username": "Pahrurozi",
        "email": "pahrurozi17@gmail.com",
        "password": "$2b$10$qvuaEe9LZtpeqswfPbaQteaNBNmgzbFOertdreXgjBywXy7ijRysG",
        "role": "Member",
        "refresh_token": null,
        "createdAt": "2022-10-20T23:49:09.169Z",
        "updatedAt": "2022-10-20T23:49:09.169Z"
      },
      ...
    ]
  },
  "meta": {
    "total": 10
  }
}
```

## Who am I
```[ENDPOINT] /api/v1/cars/user```
```url
[GET] http://localhost:5000/api/v1/user
```

#### Request headers authorization
```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiaW5pYWRtaW4yQGdtYWlsLmNvbSIsImlhdCI6MTY2NjMxNDExMiwiZXhwIjoxNjY2MzE0NDEyfQ._-94LOVbHK-mmLgrtr-FTtSFLX3YfSsrRd8a9GzmUmo
```

#### Response body
```json
{
  "id": 6,
  "username": "Admin",
  "email": "iniadmin2@gmail.com",
  "password": "$2b$10$TiUGekyjAZk3VM/hDazxEuEdII3Q3fVFeQmEe3GBDL.97B1TIWIKm",
  "role": "Admin",
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiaW5pYWRtaW4yQGdtYWlsLmNvbSIsImlhdCI6MTY2NjMxNDExMiwiZXhwIjoxNjY2NDAwNTEyfQ.Ax-MbKHLBf5bJlSz439waUNnyBHYIRMnhPSUqkLJFwA",
  "createdAt": "2022-10-19T22:07:43.439Z",
  "updatedAt": "2022-10-21T01:01:52.564Z"
}
```

## Add Users by Super Admin
```[ENDPOINT] /api/v1/admin```
```url
[POST] http://localhost:5000/api/v1/admin
```

#### Request body
```json
{
  "username": string,
  "email": string,
  "password": string,
  "confPassword": string,
}
```

#### Request headers authorization
```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiaW5pYWRtaW4yQGdtYWlsLmNvbSIsImlhdCI6MTY2NjMxNDExMiwiZXhwIjoxNjY2MzE0NDEyfQ._-94LOVbHK-mmLgrtr-FTtSFLX3YfSsrRd8a9GzmUmo
```

#### Response body
```json
{
  "status": "OK",
  "message": "Register User Successfully",
  "data": {
    "id": 18,
    "username": "Admin",
    "email": "iniadmin2@gmail.com",
    "password": "$2b$10$p8M9dF/0UjoFZDrvVXoKZOJfFX0I6P9uuZh/zs9H/eWj5XLxqGOYm",
    "role": "Admin",
    "updatedAt": "2022-10-21T01:12:26.129Z",
    "createdAt": "2022-10-21T01:12:26.129Z",
    "refresh_token": null
  }
}
```

## How To Use:
### npm install           : Install all packages
### npm run db:create     : Used to create database
### npm run db:migrate    : Used to run database
### npm run db:seed       : Used to run seeders
### npm run start         : Used to run this app

<br/>

#### Created by @pahrurozi
Lombok - Indonesia

