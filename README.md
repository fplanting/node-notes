# About

School project.\
A backend and frontend demo for storing documents in mysql database with a tinymc-editing.\
A Admin login, seeing documents, editing documents and creating new documents.

## Getting started

## Installation backend

First time installation requires you to run `npm install` and afterwards create a db.js file with required mysql credentials.

The db.js should contain the environments variables described below:

```
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "",
  user: "",
  port: "",
  database: "",
  password: "",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = db;

```

## Run backend

After installation you can get started by running `npm start`.\
Once started open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Packages used backend

express \
mysql2 \
nodemon \
cors \

# Getting started frontend

## Installation frontend

First time installation requires you to run `npm install`.

## Run frontend

After installation you can get started by running `npm start`.\
Once started open [http://localhost:3006](http://localhost:3006) to view it in your browser.


### Packages used

react \
axios \
tinymc-react

