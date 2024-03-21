## General info
This project is a simple movie library application. 
Developed as SPA (Single Page Application) and REST API backend on Node.js
The app supports search for a movie by title, overview and genre.

## Technologies
Project is created with:
* Typescript
* Node.js v18
* Nest.js
* React.js
* Axios
* Styled components
* React hook forms
* PostgresSQL

## Requirements:
* Ports: 3000, 5432 and 8081 must be free.
* Node.js v18
* Docker
* Git

## Docker Setup
The easiest way to start the project is using docker:
```
$ git clone https://github.com/R3veng3R/entain.git
$ cd ./entain
$ docker-compose up (in latest Docker you can use 'docker compose up')
```
This should start 3 docker containers: Postgres DB, backend API and frontend UI.
Wait for containers to build and start. Backend might take 1-3 sec. to start, 
since it has to import TMDB data into an empty DB. 
After that the app is available at http://127.0.0.1:3000

## Local Setup
To start locally (for development)
```
$ git clone https://github.com/R3veng3R/entain.git

Start DB service:
$ cd ./entain
$ docker-compose up -d movie-db 

Start API backend service
$ cd ./api
$ npm install
$ npm run start

Start UI frontend:
$ cd ./ui
$ npm install
$ npm run start
```
The frontend is available at http://127.0.0.1:3000 
And backend is available at, for example, GET http://localhost:8081/api/movie