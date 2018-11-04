import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
const styles = {
    media: {
        padding: '20px',
        backgroundColor: '#f2f2f2',
        height: '90%'
    },
    life: {
        width: '90%',
        paddingTop: '8px'
    }
};

class UserReview extends Component {
    render() {
        return (
            <div style={styles.media} className="user-review">
                <Grid container>
                    <Grid item xs>
                        <h1 style={{ color: '#cccccc' }}> VOTERS </h1>
                        <h1> 61% </h1>
                    </Grid>
                    <Grid item xs>
                        <img style={styles.life} src="X_Mark.svg" />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default UserReview;