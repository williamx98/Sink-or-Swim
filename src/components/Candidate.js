import React, { Component } from 'react'
import FirstBar from './FirstBar.js'
import SecondBar from './SecondBar.js'
import ThirdBar from './ThirdBar.js'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    grid: {
        margin: '50px',
    },
};


class Candidate extends Component {
    render() {
        return (
            <Grid container style={styles.grid}>
               <FirstBar /> 
               <SecondBar />
               <ThirdBar />
            </Grid>
        )
    }
}

export default withStyles(styles)(Candidate);