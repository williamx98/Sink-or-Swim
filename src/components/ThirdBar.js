import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
    media: {
        marginRight: 20,
    },
    all: {
        width: '100vh',
    },
    space: {
        paddingLeft: 142,
        height: 100,
        width: 100,
        flexGrow: '.3'
    },
    pic: {
        height: 100,
        paddingTop: '20px',
    },
    topMargin: {
        paddingTop: '20px',
        paddingLeft: '50px'
    },
    button: {
        margin: '40px',
        padding: '10px',
        backgroundColor: 'green',
        fontSize: '20px',
        color: 'white'
    },
    media1: {
        backgroundColor: '#cccccc',
        paddingLeft: 20,
        width: '90%',
        height: '48px'
    },
    space2: {
        paddingLeft: 130,
        width: '100%'
    },
    textPad: {
        paddingTop: '2px',
        paddingRight: '700px',
        color: 'white'
    }
};

class ThirdBar extends Component {
    render() {
        return (
            <Grid container style={{ width: '100%' }}>
                <Grid item md={2}>
                    <h4> NEWS </h4>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum repudiandae laborum, error ipsa impedit possimus. Rerum, mollitia quasi.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum repudiandae laborum, error ipsa impedit possimus. Rerum, mollitia quasi.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum repudiandae laborum, error ipsa impedit possimus. Rerum, mollitia quasi.</p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum repudiandae laborum, error ipsa impedit possimus. Rerum, mollitia quasi.</p>
                </Grid>
                <Grid item md={10} style={styles.space2}>
                    <Grid item style={styles.media1}>
                        <h1 style={styles.textPad}> MEDIA </h1>
                    </Grid>
                    <Grid item>
                        <h1> Dallas Morning News Editorial </h1>
                        <Grid container>
                            <Grid item xs={2}>
                                <img style={{ width: '100px' }} src="LifeSaver_Black.svg" />
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{ width: '100%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto ipsum tenetur odio omnis harum voluptas saepe laudantium ex dolore! Laboriosam, totam? Distinctio, animi perspiciatis consectetur dolorem illum fuga impedit?</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h1> Dallas Morning News Editorial </h1>
                        <Grid container>
                            <Grid item xs={2}>
                                <img style={{ width: '100px' }} src="LifeSaver_Black.svg" />
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{ width: '100%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto ipsum tenetur odio omnis harum voluptas saepe laudantium ex dolore! Laboriosam, totam? Distinctio, animi perspiciatis consectetur dolorem illum fuga impedit?</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default ThirdBar;