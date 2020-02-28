import React, { useState, useContext } from "react";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import firebaseApp from "../../firebase";
import { QueueContext } from "../../utils/queueProvider";
import SnackConfirm from "./snackbar";
import "./styles.css"

const auth = firebaseApp.auth();

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 130,
            },
        },
    },
}));

const BtnLinks = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [varient, setVarient] = React.useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const isAuth = useContext(QueueContext);
    const handleClick = () => {
        setOpen(true);
      };
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const style = {
        button: {
            color: "#fff"
        },
        box: {
            position: "absolute",
            right: 320
        },
        box2: {
            position: "absolute",
            right: 120
        }
    }

    const logoutBtn = () => {
        auth.signOut().then(() => {
            console.log("logged out");
        })
    }
    const getEmail = (e) => {
        setLoginEmail(e.target.value)
    }
    const getPassword = (e) => {
        setLoginPassword(e.target.value)
    }
    const loginBtn = () => {
        setLoginEmail("");
        setLoginPassword("");

        if (loginEmail !== "" && loginPassword !== "") {
            auth.signInWithEmailAndPassword(loginEmail, loginPassword).then((cred) => {
                console.log(cred)
                setOpen(true);
                setMessage("Login Successfull!");
                setVarient("success");
    
            }).catch(err => {
                console.log(err)
                setOpen(true);
                setMessage(err.message);
                setVarient("warning");
            });
        } else {
            setOpen(true);
            setMessage("Fields can not be empty");
            setVarient("error");
        }

    }
    const addUserBtn = () => {

    }
    return (
        <>
        <SnackConfirm 
        open={open} 
        message={message} 
        varient={varient} 
        handleClick={handleClick}
        handleClose={handleClose}
        />
        {isAuth ? (
            <>
                        
                <Button style={style.button} onClick={addUserBtn}>Add User</Button>
                <Button style={style.button} onClick={logoutBtn}>Logout</Button>
            </>
        ) : (
                <>
                    <Box style={style.box} mt="5px">
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <EmailOutlinedIcon />
                            </div>
                            <InputBase
                                placeholder="Email"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={getEmail}
                                value={loginEmail}
                            />
                        </div>
                    </Box>
                    <Box style={style.box2} mt="5px">
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <VisibilityOutlinedIcon />
                            </div>
                            <InputBase
                                placeholder="Password"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                type="password"
                                onChange={getPassword}
                                value={loginPassword}


                            />
                        </div>
                    </Box>
                    <Button style={style.button} onClick={loginBtn}>LogIn</Button>
                </>
            )}
            </>
    );
}

export default BtnLinks