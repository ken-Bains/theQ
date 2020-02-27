import React, { useState, useEffect, useRef } from 'react';
import cx from 'clsx';
import firebaseApp from "../../firebase";
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import CodeIcon from '@material-ui/icons/Code';

const db = firebaseApp.firestore();

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        borderRadius: 20,
        marginTop: 40
    },
    content: {
        padding: 24,
    },
    button: {
        marginTop: theme.spacing(1),
    },
    TextField: {
        width: 300
    },
    // animation: {
    //     animationDelay: "1s"

    // }
}));

const QueueSelected = () => {
    const [selected, setSelected] = useState([]);
    const [textArea, setTextArea] = useState("");
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();
    const classes = useStyles();

    const sendComments = (e) => {
        e.preventDefault();
        var currentId = selected[0].id;

        db.collection('notes').doc(currentId).update({
            "user":{"comment": textArea},
            "is_assigned": false
        }).then((res) => {
            setSelected(selected.filter(doc => doc.id !== currentId))
        });
    };

    const getTextValue = (e) => {
        e.preventDefault();
        setTextArea(e.target.value);
    }
    useEffect(() => {
        var ref = db.collection("notes");
        ref.where("is_assigned", "==", true)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    const docs = doc.data();
                    docs.id = doc.id;
                    return docs
                });
                setSelected(data);
            });
    }, [])

    return (

        <Box className={"animated fadeIn"}>
            {selected.length > 0 ? (
                <Card className={classes.root} classes={shadowStyles}>
                    <BrandCardHeader
                        image={selected[0].student.img}
                        extra={selected[0].student.name}
                    />
    
                    <CardContent className={cardStyles.content}>
                        <Box fontStyle="italic" mb="10px" component="div" textOverflow="ellipsis" lineHeight={2}>
                            {selected[0].note}
                        </Box>
                        <form action="/" method="POST" onSubmit={sendComments}>
                            <Box component="div" >
                                <TextField id="outlined-basic" label="Notes" variant="outlined" multiline rows="4" fullWidth onChange={getTextValue} />
                            </Box>
                            <Box mt="10px">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                    type="submit"
                                >Send</Button>

                            </Box>
                        </form>
                    </CardContent>
                </Card>

            ) : (
                    <Card className={`${classes.root}, ${classes.root} `} classes={shadowStyles}>
                        <BrandCardHeader>
                            <CodeIcon></CodeIcon>
                        </BrandCardHeader>
                        <CardContent className={cardStyles.content}>
                            <Box fontStyle="italic" mb="10px" component="div" textOverflow="ellipsis" lineHeight={2}>
                                Please Select a Student
                                </Box>
                            <Box component="div" >
                                {/* <TextField id="outlined-basic" label="Notes" variant="outlined" multiline rows="4" fullWidth /> */}
                            </Box>
                            <Box mt="10px">
                                {/* <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    endIcon={<Icon>send</Icon>}
                                >Send</Button> */}

                            </Box>
                        </CardContent>
                    </Card>
                )}

        </Box>
    );
};

export default QueueSelected;


