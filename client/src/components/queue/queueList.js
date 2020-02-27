import React, { useEffect, useContext, useState } from "react";
import db from "../../firebase";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useTheme } from '@material-ui/core/styles';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const QueueList = () => {
    // const { queue, dispatch } = useContext(QueueContext);
    const [queueList, setQueueList] = useState([]);
    const stylesShodow = useOverShadowStyles();
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
            marginLeft: "-34px"
            // marginTop: "-5px"
        },
        animation: {
            animationDelay: "1s"
        },
        img: {
            width: 100,
            height: 100,
            borderRadius: "15px",
            marginLeft: "-35px",
            marginTop: "12px"
        }
    }

    const assignToUser = (docId) => {
        console.log(docId)
        db.collection('notes').doc(docId).update({
            "is_assigned": true,
            "user.id": 1,
            "status_is_active": false
        }).then((res) => {
            setQueueList(queueList.filter(doc => doc.id !== docId))
        });
    }

    useEffect(() => {
        db.collection("notes")
            .where("status_is_active", "==", true)
            // .orderBy("date", "asc")
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    const docs = doc.data();
                    docs.id = doc.id;
                    return docs
                });
                setQueueList(data);
            })
    }, [])
    console.log(queueList)
    return (
        <Box mt="20px">
            {queueList.map((note, index) => {
                return <Box borderRadius={16} classes={stylesShodow} style={style.card} className={"animated fadeIn"} key={index} >
                    <Grid container>
                        <Grid item xs={3} style={style.avatarGrid}>
                            <Box>
                                <img src={note.student.img} style={style.img} alt="Smiley face" />
                            </Box>
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

        </Box>
    );
}

export default QueueList
        // export default withStyles(styles)(Queue)
