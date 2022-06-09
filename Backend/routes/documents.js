var express = require("express");
var router = express.Router();
const db = require("../config/db");

const cors = require("cors");
router.use(cors());

//get documents

router.get("/", function (req, res) {
  db.connect(function (err) {
    if (err) {
      console.log(err);
    }
    const sql = `SELECT * FROM documents`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("result", result);
      res.send(result);
    });
  });
});

// create a document

router.post("/create", function (req, res, next) {
  db.connect(function (err) {
    if (err) {
      console.log(err);
    }
    const title = req.body.title;
    const date = req.body.date;
    const content = req.body.content;
    const sql = `INSERT INTO documents (title, content, date) VALUES (?,?,?)`;

    db.query(sql, [title, content, date], (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("result", result);
    });
  });
  res.json({ message: "success" });
});

//get just one document
router.get("/:id", function (req, res) {
  const id = req.params.id;

  const sql = `SELECT * FROM documents WHERE id = "${id}"`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ result });
  });
});

//update a document

router.post("/:id", function (req, res) {
  const title = req.body.title;
  const date = req.body.date;
  const content = req.body.content;
  const id = req.params.id;

  const sql = `UPDATE documents SET title=?, content=?, date=? WHERE id=?`;
  db.query(sql, [title, content, date, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ message: "success" });
  });
});

//login on frontend
router.post("/login", async (req, res) => {
  if (
    req.body.username &&
    req.body.username == "admin" &&
    req.body.password &&
    req.body.password == "admin"
  ) {
    res.json({ message: "success" });
  } else {
    res.json({ mesage: "invalid" });
  }
});

module.exports = router;
