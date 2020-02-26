import React, { createContext, useReducer } from "react";
import db from "../firebase";
const QueueContext = createContext();

const init = (initial) => {
    db.collection("notes")
    .get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        return data
    });
}
const queueReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.book]
        // case "REMOVE_ITEM":
        //     return state.filter(item => item.id !== action.book.id)
        case "UPDATE_ITEM":
            return state.filter(item => item.id !== action.book.id)
        default:
            return state
    };
}

const QueueContextProvider = (props) => {
    const [queue, dispatch] = useReducer(queueReducer, [], init);
    return (
        <QueueContext.Provider value={{ queue, dispatch }}>
            {props.children}
        </QueueContext.Provider>
    )
}

export {QueueContextProvider, QueueContext};