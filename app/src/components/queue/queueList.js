import React, { useEffect, useContext, useState } from "react";
import db from "../../firebase";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useTheme } from '@material-ui/core/styles';
import { QueueContext } from "../../utils/queueProvider"
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const QueueList = () => {
    // const { queue, dispatch } = useContext(QueueContext);
    const [queueList, setQueueList] = useState([]);
    const styles = useOverShadowStyles();
    const theme = useTheme();
    const style = {
        card: {
            width: 340,
            height: 130,
            margin: "0 auto",
            marginBottom: 20,
            backgroundColor: theme.palette.background.paper
        },
        avatarQueue: {
            width: "100px",
            height: "110px",
            marginLeft: "-34px",
            marginTop: "-5px"
        },
        animation: {
            animationDelay: "1s"

        }
    }

    const assignToUser = (docId) => {
        console.log(docId)
        db.collection('notes').doc(docId).update({
            "is_assigned": true,
            "user.id": 1,
            "student.name": "Joe"
        }).then((res)=>{
            console.log(res)
        });
    }
    useEffect(() => {
        db.collection("notes").get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    const docs = doc.data();
                    docs.id = doc.id;
                    return docs
                });
                setQueueList(data);
            }).catch(err => console.log(err));
    }, [])
    console.log(queueList)
    return (
        <>
            {queueList.map((note, index) => {
                return <Box borderRadius={16} classes={styles} style={style.card} className={"animated fadeOutUp slideInUp"} key={index}>
                    <Grid container>
                        <Grid item xs={3} style={style.avatarGrid}>
                            <Avatar alt="Remy Sharp" src={note.student.img} style={style.avatarQueue} />
                        </Grid>
                        <Grid item xs={8} >
                            <Grid container>
                                <Grid item xs={10}>
                                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" display="inline">
                                        {note.topic}
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box component="div" display="inline" >
                                        <IconButton aria-label="delete" fontSize="small" onClick={() => assignToUser(note.id)}>
                                            <PostAddIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Box fontStyle="italic" mt="2px" component="div" textOverflow="ellipsis" >
                                {note.note} <b> ~{note.student.name}</b>
                            </Box>
                            {/* <Box fontWeight="fontWeightMedium"  textAlign="right">
                                ~Joe smith
                            </Box> */}
                        </Grid>
                    </Grid>
                </Box>

            })}

        </>
    );
}

export default QueueList
// export default withStyles(styles)(Queue)
