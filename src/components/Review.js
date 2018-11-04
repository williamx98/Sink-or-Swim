import React, { Component } from 'react'
import CriticReview from './CriticReview.js'
import UserReview from './UserReview.js'
import Grid from '@material-ui/core/Grid';
const styles = {
    media: {
        height: '100%'
    },
    style: {
        height: '69%',
        
    }
};

class Review extends Component {
    render() {
        return (
            <div style={styles.media}>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <h1>Greg Abbott</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <h2>R-Texas</h2>
                    </Grid>
                </Grid>

                <Grid container style={styles.style} spacing={24}>
                    <Grid item xs={8}>
                        <CriticReview />
                    </Grid>
                    <Grid item xs={4}>
                        <UserReview />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Review;