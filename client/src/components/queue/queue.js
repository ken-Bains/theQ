import React, { useContext } from "react";
import Grid from '@material-ui/core/Grid';
import QueueList from "./queueList";
import QueueSelected from "./queueSelected";
import QueueTabs from "./queueTabs";
// import { useTheme, withStyles } from '@material-ui/core/styles';
import { QueueContext } from "../../utils/queueProvider";



const Queue = (props) => {
    const isAuth = useContext(QueueContext);



    return (
        // <QueueTabs />
        isAuth ? (
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
        ) : (
                <p>
                    dssdds
            </p>
            )

    )
}



export default Queue




