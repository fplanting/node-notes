const mysql = require("mysql2");

//creating connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "notes",
  password: "root",
  dateStrings: true,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = db;
