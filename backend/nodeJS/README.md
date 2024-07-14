# ALXCode backend api node Express test version

this is the first version of the api with express and socketio just to test.

## Table of Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Example Requests](#example-requests)
- [Normal EndPoints](#normal-endpoints)

## Installation

To install this project, clone the repository and navigate into the project directory:

```sh
git clone https://github.com/AjwadG/ALXCode.git
cd ALXCode/backend/nodeJS
```

## Dependencies

Make sure you have [Node.js](https://nodejs.org/en/download/package-manager) and npm installed. You can check your node version with:

```sh
node -v
```
the node version must be 16.+


To install the project dependencies, run:

```sh
npm install
```

## Running the Server

To start the server, run:

```sh
npm start
```

like that the server will be ran on the default port 3000

The server will start on `http://localhost:3000`.

to use a difrent port create a .env file like this

```
PORT=5000
```


## API Endpoints

### GET /api/getTree

Gets the tree of the supplied path.

#### Request

```sh
curl -X GET http://localhost:3000/api/getTree -H "Content-Type: application/json"
-d '{
  "path": "/path/to/directory"
}'
```

#### Response

```json
{
    "id": 1,
    "path": "/path/to/directory",
    "name": "directory",
    "parent": "/path/to",
    "dir": true,
    "childs": [
        {
            "id": 2,
            "path": "/path/to/directory/file1",
            "name": "file1",
            "parent": "/path/to/directory",
            "dir": false
        },
        {
            "id": 3,
            "path": "/path/to/directory/file2",
            "name": "file2",
            "parent": "/path/to/directory",
            "dir": false
        }
    ]
}
```

### GET /api/readFile

Gets the Conten of the supplied file.

#### Request

```sh
curl -X GET http://localhost:3000/api/readFile -H "Content-Type: application/json"
-d '{
  "path": "/path/to/file"
}'
```

#### Response

```json
{
    "succeed": true,
    "output": "Content of the file supplied",
    "error": ""
}
```

### PUT /api/move

Moves the supplied file or directory to the supplied path.

#### Request

```sh
curl -X PUT http://localhost:3000/api/move -H "Content-Type: application/json"
-d '{
    "oldPath": "/path/to/file_or_directory",
    "newPath": "/path/to/destination"
}'
```

#### Response

```json
{
    "succeed": true,
    "output": "",
    "error": ""
}
```

### PUT /api/rename

Renames a file or directory.

#### Request

```sh
curl -X PUT http://localhost:3000/api/rename -H "Content-Type: application/json"
-d '{
    "oldPath": "/path/to/file_or_directory",
    "newName": "new_name"
}'
```

#### Response

```json
{
    "succeed": true,
    "output": "",
    "error": ""
}
```

### DELETE /api/delete

Deletes the sublied file or directory.

#### Request

```sh
curl -X DELETE http://localhost:3000/api/delete -H "Content-Type: application/json"
-d '{
    "path": "/path/to/file_or_directory"
}'
```

#### Response

```json
{
    "succeed": true,
    "output": "",
    "error": ""
}
```

### POST /api/create

Creates a file or directory.

#### Request

```sh
curl -X POST http://localhost:3000/api/create -H "Content-Type: application/json"
-d '{
    "path": "/path/to/directory",
    "fileName": "new_file_name_or_directory_name",
    "isDir": true or false (default: false)
}'
```

#### Response

```json
{
    "succeed": true,
    "output": "",
    "error": ""
}
```

### POST /api/save

saves the content to a file if the file dosnt exist it will create it.

#### Request

```sh
curl -X POST http://localhost:3000/api/save -H "Content-Type: application/json"
-d '{
    "filePath": "/path/to/file"
    "content": "content of the file"
}'
```

#### Response

```json
{
    "succeed": true,
    "output": "",
    "error": ""
}
```

## Normal EndPoints

### api Documentation

#### you can faind the full doc on http://localhost:3000/doc


### Terminal session with webSocket using socket.io

#### you can faind a demo on http://localhost:3000/