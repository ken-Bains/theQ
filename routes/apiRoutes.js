const axios = require("axios");
const router = require("express").Router();
let serviceAccount = require("../firestore.json")
const admin = require('firebase-admin');
// console.log(process.env.CLIENT_ID)
 
// let serviceAccount = {
//   "type": "service_account",
//   "project_id": "bootcamp-q",
//   "private_key_id": process.env.PRIVATE_KEY_ID,
//   "private_key": process.env.PRIVATE_KEY,
//   "client_email": process.env.CLIENT_EMAIL,
//   "client_id": process.env.CLIENT_ID_FIREBASE,
//   "auth_uri": process.env.AUTH_URI,
//   "token_uri": process.env.TOKEN_URI,
//   "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_CERT, 
//   "client_x509_cert_url": process.env.CLIENT_CERT
// }

// const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
// adminConfig.credential = admin.credential.cert(serviceAccount);
// admin.initializeApp(adminConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();


router.get('/oauth', function (req, res) {
  console.log("oath");
  if (!req.query.code) {
    res.status(500);
    res.send({ "Error": "Looks like we're not getting code." });
    console.log("Looks like we're not getting code.");
  } else {
    var auth_adresse = 'https://slack.com/api/oauth.access?'
    auth_adresse += 'client_id=' + process.env.CLIENT_ID
    auth_adresse += '&client_secret=' + process.env.CLIENT_SECRET
    auth_adresse += '&code=' + req.query.code
    auth_adresse += '&redirect_uri=http://true.serverless.social/notes'

    axios.get(auth_adresse)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
});


router.post("/notes", (req, res) => {
  const slackData = req.body;
    console.log("notes")
  // getCurrentActiveList(req.body.response_url)
  
  db.collection('notes').add({
    "student": {
      "id": slackData.user_id,
      "img": 'https://ca.slack-edge.com/TPB919Z7Z-UQJBUH3EJ-be810cf98b6e-512',
      "name": slackData.user_name
    },
    "status_is_active": true,
    "note": slackData.text,
    "class": { "name": slackData.team_domain, "id": slackData.team_id },
    "user": {
      "comment": "",
      "id": "",
      "img": 'https://ca.slack-edge.com/TPB919Z7Z-UQJA90D46-d1eb5e7363cf-512',
      "name": ""
    },
    is_assigned: false,
    "topic": '01-html-git-css',
    "date": Date.now()
  }).catch(err => console.log(err));
  
  
  res.json(slackData.user_name + ", You have been added to the Queue!")

});

const getCurrentActiveList = async (url) => {

  const data = await db.collection("notes").get();
  data.docs.map(doc => `${doc.data().student.name}:  ${doc, data().note} \n`);

  axios.post(url, {response}).then(res => {
    console.log(res)
  }).catch(err => console.log(err))

}


module.exports = router;
