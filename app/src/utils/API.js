import axios from "axios";

export default {
    // Gets all books
    getSlackAuth: (match) => {
        console.log("hlguygluyg");
        console.log(match);
        // When a user authorizes an app, a code query parameter is passed on the oAuth endpoint. If that code is not there, we respond with an error message
        if (!match.params.code) {
            // res.status(500);
            // res.send({ "Error": "Looks like we're not getting code." });
            console.log("Looks like we're not getting code.");
        } else {
            var auth_adresse = 'https://slack.com/api/oauth.access?'
            auth_adresse += 'client_id=' + process.env.CLIENT_ID
            auth_adresse += '&client_secret=' + process.env.CLIENT_SECRET
            auth_adresse += '&code=' + match.params.code
            auth_adresse += '&redirect_uri=http://true.serverless.social/notes'

            axios.get(auth_adresse)
                .then(data => {
                    return JSON.parse(data)
                })
                .catch(err => console.log(err));
        }
        return null
    },

    getSlackNotes: (match) => {
        console.log("notes api")
        console.log(match, "-req.data".repeat(60));
        // res.send('Your ngrok tunnel is up and running!');
        return null
    }
}
