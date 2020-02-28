# theQ

## Summary 
Using React, Firebase, Node, and Material UI, Slack, I created a app that would streamline the process of asking for help in a coding bootcamp setting. I created a bot within slack to allow slash commands and a user comment. That users comments as well as a picture, name, and class info was then sent to this application and added to a queue. The queue, managed by the instructors and TA's, would see the queue and assign the help ticket to themselves. Gathering all the data also assits the instructors to view which area of the bootcamp had the most questions and possibly restrucure the class accordingly. 

## Link to site
https://the-q-help-desk.herokuapp.com/

## Site Clip
![Site](assets/the-q.gif)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Firebase - Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.
- Localtunnel - Localtunnel allows you to easily share a web service on your local development machine without messing with DNS and firewall settings.
- Node JS - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.
- React - JavaScript library for building user interfaces.
- Axios - Promise based HTTP client for the browser and node.js
- Material UI - React components for faster and easier web development. Build your own design system, or start with Material Design.


## Code Snippet
```javascript
import React, { createContext, useState } from "react";
import firebaseApp from "../firebase";

const QueueContext = createContext();
const auth = firebaseApp.auth();

const QueueContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false)
    auth.onAuthStateChanged(user => {
        if(user) {
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
    })

    return (
        <QueueContext.Provider value={isAuth}>
            {props.children}
        </QueueContext.Provider>
    )
}

export {QueueContextProvider, QueueContext};

```
- The code snippit above is example of React hooks. There is an active autentication listener on the application that hides content from view if the user is logged out. 


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)
