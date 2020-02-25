import React, { createContext, useReducer } from "react";

const QueueContext = createContext();

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
    const [queue, dispatch] = useReducer(queueReducer, []);

    return (
        <QueueContext.Provider value={{ queue, dispatch }}>
            {props.children}
        </QueueContext.Provider>
    )
}

export {QueueContextProvider, QueueContext};