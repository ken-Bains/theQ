import React, { useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import AirplanemodeActive from '@material-ui/icons/AirplanemodeActive';
import VerticalTicketRip from '@mui-treasury/components/rip/verticalTicket';
import { useVerticalRipStyles } from '@mui-treasury/styles/rip/vertical';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackConfirm from "../layout/snackbar";
import firebaseApp from "../../firebase";

const auth = firebaseApp.auth();

const mainColor = '#003399';
const lightColor = '#003399';
const borderRadius = 12;

const useStyles = makeStyles(({ palette, breakpoints, theme }) => ({
  card: {
    overflow: 'visible',
    background: 'none',
    display: 'flex',
    width: 400,
    height: 150,
    filter: 'drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3))',
    '& $moveLeft, $moveRight': {
      transition: '0.3s',
    },
    '&:hover': {
      '& $moveLeft': {
        transform: 'translateX(-8px)',
      },
      '& $moveRight': {
        transform: 'translateX(8px)',
      },
    },
    [breakpoints.up('sm')]: {
      minWidth: 400,
    },
    margin: "0 auto",
    marginTop: 40
  },
  left: {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    flexBasis: '44.33%',
    display: 'flex',
    backgroundColor: palette.background.paper,
  },
  media: {
    margin: 'auto',
    width: 80,
    height: 80,
    borderRadius: '50%',
  },
  right: {
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    flex: 1,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: palette.background.paper,
  },
  label: {
    padding: '0 8px',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 4,
  },
  subheader: {
    fontSize: 12,
    margin: 0,
    color: palette.text.secondary,
  },
  path: {
    flex: 1,
    flexBasis: 72,
    padding: '0 4px',
  },
  line: {
    position: 'relative',
    margin: '20px 0 16px',
    borderBottom: '1px dashed rgba(0,0,0,0.38)',
  },
  plane: {
    position: 'absolute',
    display: 'inline-block',
    padding: '0 4px',
    fontSize: 32,
    backgroundColor: palette.background.paper,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(90deg)',
  },
  flight: {
    fontSize: 14,
    lineHeight: '24px',
    minWidth: 48,
    padding: '0 8px',
    borderRadius: 40,
    backgroundColor: '#bed0f5',
    color: palette.background.paper,
    display: 'block',
  },
  moveLeft: {},
  moveRight: {},
}));

const ForgotPassword = () => {
  const styles = useStyles();
  const theme = useTheme();
  const [resetEmail, setResetEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [varient, setVarient] = React.useState("");

  const ripStyles = useVerticalRipStyles({
    size: 24,
    rightColor: theme.palette.background.paper,
    tearColor: mainColor,
  });

  const getEmailValue = (e) => {
    setResetEmail(e.target.value)
  }
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const resetPassword = () => {
    auth.sendPasswordResetEmail(resetEmail).then(function () {
      setOpen(true);
      setMessage("Reset email has been processed!");
      setVarient("success");
    }).catch(function (error) {
      setOpen(true);
      setMessage(error.message);
      setVarient("error");
    });
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
      <Card className={styles.card} elevation={0}>
        <div className={cx(styles.left, styles.moveLeft)}>
          {/* <CardMedia
          className={styles.media}
          image={
            'https://dejpknyizje2n.cloudfront.net/marketplace/products/yin-yang-two-fighting-dragons-sticker-1538772130.3390164.png'
          }
        /> */}
          <Box mt="50px" ml="15px">

            <a href="https://slack.com/oauth/v2/authorize?client_id=948826947618.964128012390&scope=commands,incoming-webhook"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
          </Box>
        </div>
        {/* <VerticalTicketRip
        classes={{
          ...ripStyles,
          left: cx(ripStyles.left, styles.moveLeft),
          right: cx(ripStyles.right, styles.moveRight),
        }}
      /> */}
        <div className={cx(styles.right, styles.moveRight)}>
          {/* <div className={styles.label}>
          <h2 className={styles.heading}>BEK</h2>
          <p className={styles.subheader}>Beijing China</p>
        </div>
        <div className={styles.path}>
          <div className={styles.line}>
            <AirplanemodeActive className={styles.plane} />
          </div>
          <span className={styles.flight}>AB256</span>
        </div>
        <div className={styles.label}>
          <h2 className={styles.heading}>DMK</h2>
          <p className={styles.subheader}>Don Meaung</p>
        </div> */}
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="email" value={resetEmail} onChange={getEmailValue} />
            <Button href="#text-buttons" color="primary" mt="5px" onClick={resetPassword}>
              Reset Password
      </Button>
          </form>
        </div>
      </Card>
    </>
  );
};

export default ForgotPassword;