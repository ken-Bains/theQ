import React, { Component, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import Button from '@material-ui/core/Button';
import { QueueContext } from "../../utils/queueProvider";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const History = () => {
    const theme = useTheme();
    const isAuth = useContext(QueueContext);
    const themeType = theme.palette.background.paper === "#fff" ? "gammel" : "candy";

    const styles = useFadedShadowStyles();
    const styles1 = {
        box: {
            width: 1100
        },

    };

    const dataSource = {
        "chart": {
            "caption": "Class Data",
            "subCaption": "Data from the entire class section",
            "xAxisName": "Modules",
            "yAxisName": "Number of Request",
            "numberSuffix": "",
            "theme": "gammel"
        },
        "data": [
            {
                "label": "01-html-git-css",
                "value": "10"
            },
            {
                "label": "02-css-bootstrap",
                "value": "7"
            },
            {
                "label": "03-javascript",
                "value": "14"
            },
            {
                "label": "04-Web-APIs",
                "value": "12"
            },
            {
                "label": "05-Third-Party-APIs",
                "value": "15"
            },
            {
                "label": "06-Server-Side-APIs",
                "value": "4"
            },
            {
                "label": "07-Project-1",
                "value": "8"
            },
            {
                "label": "09-NodeJS",
                "value": "11"
            },
            {
                "label": "10-OOP",
                "value": "11"
            },
            {
                "label": "11-express",
                "value": "3"
            },
            {
                "label": "12-MySQL",
                "value": "9"
            },
            {
                "label": "13-MVC",
                "value": "19"
            },
            {
                "label": "14-Full-Stack",
                "value": "6"
            },
            {
                "label": "15-Project-2",
                "value": "9"
            },
            {
                "label": "16-Computer-Science",
                "value": "10"
            },
            {
                "label": "17-NoSQL",
                "value": "19"
            },
            {
                "label": "18-React",
                "value": "11"
            },
            {
                "label": "19-State",
                "value": "14"
            },
            {
                "label": "20-MERN",
                "value": "7"
            },
            {
                "label": "21-Project-3",
                "value": "18"
            }
        ]
    };
    const chartConfigs = {
        type: 'column2d',
        width: 750,
        height: 500,
        dataFormat: 'json',
        dataSource: dataSource,
    };
    return (
        isAuth ? (
            <Box m="30px" style={styles1.box}>
            <Grid container classes={styles} >
                <Grid item xs={8}>
                    <ReactFC {...chartConfigs} />
                </Grid>
                <Grid item xs={4}>
                    <Box ml="100px" mt="40px">
                        <Box component="div" >
                            <Button href="#text-buttons" color="primary">
                                All Modules
                            </Button>
                        </Box>
                        <Box component="div">
                            <Button href="#text-buttons" color="primary">
                                React Modules
                            </Button>
                        </Box>
                        <Box component="div">
                            <Button href="#text-buttons" color="primary">
                                Javascript Modules
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        ) : (<p></p>)
    )

}

export default History