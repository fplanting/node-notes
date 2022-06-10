# About

School project.\
A backend and frontend page for storing documents in mysql database with a tinymc-editing.\
A Admin login, seeing documents, editing documents and creating new documents.

# Getting started

For database, create table "documents" with this structure:
```
id
title
date
content
```

## Installation backend

First time installation requires you to run `npm install` and afterwards create a map called config in root with a db.js file with required mysql credentials.

The db.js should contain the environments variables described below:

```
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "",
  user: "",
  port: "",
  database: "",
  password: "",
  dateStrings: true,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = db;

```


### Run backend

After installation you can get started by running `npm start`.\
Once started open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Packages used backend

express \
mysql2 \
nodemon \
cors \


## Installation frontend

First time installation requires you to run `npm install` and afterwards create a .env file with a key string which you get access to from [https://www.tiny.cloud/] (https://www.tiny.cloud/), by creating a user.

The .env file should contain as below:

```
REACT_APP_SECRET_KEY="key-string"
```


## Run frontend

After installation you can get started by running `npm start`.\
Once started open [http://localhost:3006](http://localhost:3006) to view it in your browser.


### Packages used

react \
axios \
tinymce-react \
html-react-parser

