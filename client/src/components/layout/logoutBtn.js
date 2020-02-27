import React, { useEffect, useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import firebaseApp from "../../firebase";
import { useTheme } from '@material-ui/core/styles';
import "./styles.css"

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function LogotBtn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const style = {
        card: {
            width: 540,
            height: 330,
            margin: "0 auto",
            marginBottom: 20,
            backgroundColor: theme.palette.background.paper,
            marginTop: 100
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
        },
        button:{
            color: "#fff"
        }
    }

    const logoutBtn = () => {
        console.log("SASa")
        setOpen(true);
        
    }

    return (
        <>
            <Button style={style.button} onClick={logoutBtn}>Logout</Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                className="modals"
            >
                <Box style={style.card} className={"animated fadeIn"}>
                        vfebbfe
                </Box>
            </Modal>
        </>
    );
}
