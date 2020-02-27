import React, { useContext } from "react";
import Grid from '@material-ui/core/Grid';
import QueueList from "./queueList";
import QueueSelected from "./queueSelected";
import QueueTabs from "./queueTabs";
// import { useTheme, withStyles } from '@material-ui/core/styles';
import { QueueContext } from "../../utils/queueProvider";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import Box from '@material-ui/core/Box';
import ForgotPassword from "./forgotPassword"
const useStyles = makeStyles({
    root: {
        width: 275,
        margin: "0 auto",
        borderRadius: 20,
        marginTop: 30,
        height: 200
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        // marginBottom: 12,
    },
});

const Queue = (props) => {
    const isAuth = useContext(QueueContext);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const styles = useFadedShadowStyles();


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
                <>
                    {/* <Card className={classes.root} classes={styles}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Welcome to The Q
        </Typography>
                            <Typography variant="h5" component="h2">
                                Please Sign In
        </Typography>
                            <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
          <br />
        <hr/>
        <Typography variant="body2" component="p">
          Add this app to your slack channel
        </Typography>
                        </CardContent>
                        <Box ml="60px">
                            <Button size="small">Learn More</Button>
                            <a href="https://slack.com/oauth/v2/authorize?client_id=948826947618.964128012390&scope=commands,incoming-webhook"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a>
                        </Box>
                    </Card> */}
                    <ForgotPassword />
            </>
            )

    )
}



export default Queue




