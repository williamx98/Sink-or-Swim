import React, { Component } from 'react'
import Review from './Review.js'
import Grid from '@material-ui/core/Grid';
const styles = {
    height: {
        height: '300px',
    },
    media: {
        marginRight: 20,
    },
    all: {
        width: '100vh',
    },
    pic: {
        height: 300,
    },
    
};

class FirstBar extends Component {
    render() {
        return (
            <Grid style={styles.height} container>
                <Grid item xs={12} sm={12} md={3}>
                    <img style={styles.pic} src="1024px-Beto_O'Rourke,_Official_portrait,_113th_Congress.jpg" alt ="pic" />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Review />
                </Grid>
            </Grid>
        )
        }
}

export default FirstBar;