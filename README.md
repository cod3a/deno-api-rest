## Deno Rest Api
using oak to create a simple rest api 

## Installation

1. Clone the repository
2. rename `.env.example` to `.env`
3. set **URI** and **DBNAME** with your own credentials to connect to your mongodb database
3. Start the server by running `make` (or use the command inside **Makefile**)

## Usage
You can access the following endpoints on [http://localhost:8000](http://localhost:8000)


| METHOD | URL        | Description        |
|--------|------------|--------------------|
| GET    | /users     | Return all users   |
| GET    | /users/:id | Return single user |
| POST   | /users     | Create a new user  |
