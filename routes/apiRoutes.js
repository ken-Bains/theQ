const axios = require("axios");
const router = require("express").Router();
const db = require("../models")

router.get("/api/books", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?key=AIzaSyD1vAB6ebgaBoaJKNAgmnFeVICug9Ls8fo", { params: req.query })
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

router.post("/api/books", (req, res) => {
  db.Book.create(req.body)
    .then(results => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.delete("/api/books/:id", (req, res) => {
  db.Book.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
