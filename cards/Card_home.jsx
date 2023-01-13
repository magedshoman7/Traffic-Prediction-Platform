import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import Footer from '../Footer';
import Card_h from './Card_history';
import Card_p from './Card_predict';
import Card_w from './Card_whatif';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import useSpeech from '../hooks/speech'

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '40px',
        paddingRight: '40px',
        marginTop: '5rem',
        marginBottom: '17.8rem',
       

    }
});

function Card_home() {
    useSpeech()

    const classes = useStyles();

    return (
        <Grid container direction = "column">
            {/* <Grid item>
                <Header />
            </Grid> */}
            <Grid container spacing = {2} className={classes.gridContainer} justify="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Card_h />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card_p />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card_w />
                </Grid>
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    )
}

export default Card_home
