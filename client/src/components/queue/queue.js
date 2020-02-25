import React, { useEffect, useContext } from "react";
import axios from "axios";
import { QueueContext } from "../../utils/queueProvider";
// import API from "../../utils/API";
import * as firebase from "firebase";

const Queue = () => {
    const {queue, dispatch} = useContext(QueueContext);
    
    useEffect(() => {
        const rootref = firebase.datebase().ref().child("notes");
    })
    
    return (
        <div>
            queue
        </div>
    )
}

export default Queue