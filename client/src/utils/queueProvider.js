import React, { createContext, useState } from "react";
import firebaseApp from "../firebase";

const QueueContext = createContext();
const auth = firebaseApp.auth();


// const queueReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_ITEM":
//             return [...state, action.book]
//         // case "REMOVE_ITEM":
//         //     return state.filter(item => item.id !== action.book.id)
//         case "UPDATE_ITEM":
//             return state.filter(item => item.id !== action.book.id)
//         default:
//             return state
//     };
// }

const QueueContextProvider = (props) => {
    // const [queue, dispatch] = useReducer(queueReducer, [], init);
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