import React, { useEffect} from "react";
import axios from "axios";
import API from "../../utils/API";

const Queue = () => {
    useEffect(() => {
        axios.get("https://localhost:3001/api/books")
            .then(res => console.log(res, "queue line7"))
            .catch(err => console.log(err, " queue.js "))
        // API.getBooks().then(res=> console.log(res))

    })
    
    return (
        <div>
            queue
        </div>
    )
}

export default Queue