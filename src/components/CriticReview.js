import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import '../App.css';

const styles = {
    media: {
        backgroundColor: '#cccccc',
        height: '43.25%',
        padding: '20px'
    },
    water: {
       height: '70%',
       transform: 'translateY(-74px)'
   },
   life: {
       width: '90%',
       paddingTop: '8px'
   }
};
class CriticReview extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs>
                    <div style={styles.media} className="critic-review">
                        <Grid container>
                            <Grid item xs>
                                <h1 style={{color: 'white'}}> MEDIA </h1>
                                <h1 class="reviewVal">67%</h1> 
                            </Grid>
                            <Grid item xs>
                                <img style={styles.life} src="LifeSaver_White.svg" />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs>
                    <img style={styles.water} src="logo.svg" />
                </Grid>
            </Grid>
        )
    }
}

export default CriticReview;