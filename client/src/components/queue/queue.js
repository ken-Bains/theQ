import React from "react";
import Grid from '@material-ui/core/Grid';
import QueueList from "./queueList";
import QueueSelected from "./queueSelected";
import QueueTabs from "./queueTabs";
// import { useTheme, withStyles } from '@material-ui/core/styles';



const Queue = (props) => {



    return (
        // <QueueTabs />
        <>
            <Grid container>
                <Grid item xs={6} >
                    <QueueList />
                </Grid>
                <Grid item xs={6} >
                    <QueueSelected />
                </Grid>
            </Grid>
        </>
    )
}



export default Queue




