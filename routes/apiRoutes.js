const axios = require("axios");
// const router = require("express").Router();
// const db = require("../models")

var clientId = '948826947618.964128012390';
var clientSecret = 'ae59a09d9613185922c4bca00014255e';

// console.log("dsdssd");
// router.get('/oauth', function(req, res) {
//   console.log('dss');
//   // When a user authorizes an app, a code query parameter is passed on the oAuth endpoint. If that code is not there, we respond with an error message
//   if (!req.query.code) {
//       res.status(500);
//       res.send({"Error": "Looks like we're not getting code."});
//       console.log("Looks like we're not getting code.");
//   } else {
//     var auth_adresse = 'https://slack.com/api/oauth.access?'
//     auth_adresse += 'client_id=' + clientId
//     auth_adresse += '&client_secret=' + clientSecret
//     auth_adresse += '&code=' + req.query.code
//     auth_adresse += '&redirect_uri=http://true.serverless.social/notes'
  
//       axios.get(auth_adresse)
//         .then(data => res.json(data))
//         .catch(err => res.status(422).json(err));
//       }
// });
module.exports = function(app) {
  app.get("/api/books", (req, res) => {
    console.log("apiroues line 30")
    res.json("hello from apit routes");
    // axios
    //   .get("https://www.googleapis.com/books/v1/volumes?key=AIzaSyD1vAB6ebgaBoaJKNAgmnFeVICug9Ls8fo&https://www.googleapis.com/books/v1/volumes?key=AIzaSyD1vAB6ebgaBoaJKNAgmnFeVICug9Ls8fo&q=harry")
    //   .then(results => res.json(results.data))
    //   .catch(err => console.log(err, "apiroutes"));
  });

}

// router.post("/notes", (req, res) => {
//   console.log(req.data, "-req.data".repeat(60));
//   console.log(req, "-req".repeat(60));
//   res.send('Your ngrok tunnel is up and running!');

// });

// router.delete("/api/books/:id", (req, res) => {
//   // db.Book.findById({ _id: req.params.id })
//   //   .then(dbModel => dbModel.remove())
//   //   .then(dbModel => res.json(dbModel))
//   //   .catch(err => res.status(422).json(err));
// });

// module.exports = router;
