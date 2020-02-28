import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackConfirm(props) {
    console.log(props.varient, "dds");
  const classes = useStyles();





  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
            {/* <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.open}
        autoHideDuration={3000}
        onClose={props.handleClose}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={props.handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={props.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        message={props.message}

        /> */}
      <Snackbar open={props.open} autoHideDuration={4000} onClose={props.handleClose}>
        <Alert  severity={props.varient}>
        {props.message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </div>
  );
}
