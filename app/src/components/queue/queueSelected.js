import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        borderRadius: 20,
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
    animation: {
        animationDelay: "1s"

    }
}));

const QueueSelected = () => {
    const shadowStyles = useLightTopShadowStyles();
    const cardStyles = useStyles();
    const classes = useStyles();

    return (
        <Card className={`${classes.root}, ${classes.root} animated slideInUp `} classes={shadowStyles}>
            <BrandCardHeader
                image={
                    'https://i.pravatar.cc/300'
                }
                extra={'Joe Smith'}
            />
            <CardContent className={cardStyles.content}>
                <Box fontStyle="italic" mb="10px" component="div" textOverflow="ellipsis" lineHeight={2}>
                    i need hdsd s ds d sd s dss
                    </Box>
                <Box component="div" >
                    <TextField id="outlined-basic" label="Notes" variant="outlined" multiline rows="4" fullWidth />
                </Box>
                <Box mt="10px">
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                    >Send</Button>

                </Box>
            </CardContent>
        </Card>
    );
};

export default QueueSelected;