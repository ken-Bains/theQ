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