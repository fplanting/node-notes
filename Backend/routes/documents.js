var express = require("express");
var router = express.Router();
const db = require("../config/db");
const cors = require("cors");

router.use(cors());

//get documents
router.get("/", function (req, res) {
  db.query("SELECT * FROM documents", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//get just one document
router.get("/:id", function (req, res) {
  const id = req.params.id;
  db.query("SELECT * FROM documents WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// create a document
router.post("/create", function (req, res) {
  const title = req.body.title;
  const date = req.body.date;
  const content = req.body.content;

  db.query(
    "INSERT INTO documents (title, content, date) VALUES (?,?,?)",
    [title, date, content],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

//update a document
module.exports = router;
