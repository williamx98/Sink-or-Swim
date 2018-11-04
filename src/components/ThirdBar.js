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
    },
    links: {
        color: '#0000b7',
        textDecoration: 'none'
    },
    headlines: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '24px',
    }
};

class ThirdBar extends Component {
    render() {
        return (
            <Grid container style={{ width: '100%' }}>
                <Grid item md={2}>
                    <h4> NEWS </h4>
                    <p>
                        Texas Tribune
                        <br />
                        <a style={styles.headlines} href="https://www.texastribune.org/2018/11/01/texas-gov-greg-abbott-has-pitched-plan-fix-school-finance/"> Behind closed doors, Greg Abbott’s office has pitched a plan to fix Texas school finance </a>
                    </p>
                    <p>
                        San Antonio Express-News
                        <br/>
                        <a style={styles.headlines} href="https://www.expressnews.com/news/politics/texas_legislature/article/Gov-Greg-Abbott-pushes-for-limit-on-school-13358780.php"> Gov. Greg Abbott pushes for limit on school property tax hikes
                        </a>
                    </p>
                    <p>
                        Dallas Morning News
                        <br />
                        <a style={styles.headlines} href="https://www.dallasnews.com/news/2018-elections/2018/11/03/election-day-sprint-gov-greg-abbott-lupe-valdez-texas-candidates"> Election Day sprint: What are Gov. Greg Abbott, Lupe Valdez and other Texas candidates up to? </a>

                    </p>
                    <p>
                        KFox14
                        <br />
                        <a style={styles.headlines} href="https://kfoxtv.com/news/election/gov-greg-abbott-will-hurd-speak-to-supporters-in-el-paso-ahead-of-elections"> Gov. Greg Abbott, Will Hurd speak to supporters in El Paso ahead of elections
                        </a>
                    </p>
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
                                <p style={{ width: '100%' }}>The case for returning Republican Greg Abbott to office can be simply made. He is the governor of a state with a thriving economy and that is succeeding at attracting businesses and new residents at an astounding clip. And in times of crisis, Abbott has provided the level-headed leadership needed. His governing philosophy is more in tune with the political values of most Texans, and his fondness for low taxes and free enterprise will help keep the economy humming. He is the better candidate.</p>
                                <a style={styles.links} href="https://www.dallasnews.com/opinion/editorials/2018/10/18/we-recommend-greg-abbott-for-governor-1"> View Full Editorial </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h1> Austin Chronicle </h1>
                        <Grid container>
                            <Grid item xs={2}>
                                <img style={{ width: '100px' }} src="Anchor_Black.svg" />
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{ width: '100%' }}>What, you expected us to endorse a Republican in 2018? </p>
                                <a style={styles.links} href="https://www.austinchronicle.com/news/2018-10-19/chronicle-endorsements/"> View Full Endorsements </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <h1> Houston Chronicle </h1>
                        <Grid container>
                            <Grid item xs={2}>
                                <img style={{ width: '100px' }} src="LifeSaver_Black.svg" />
                            </Grid>
                            <Grid item xs={8}>
                                <p style={{ width: '100%' }}> This gubernatorial race, if we can call it that, between Republican Gov. Greg Abbott and former Dallas County Sheriff Lupe Valdez has left Texas voters with a hard choice. In the absence a better option, we endorse the incumbent — though not the status quo. </p>
                                <a style={styles.links} href="https://www.houstonchronicle.com/opinion/recommendations/article/Senate-Beto-ORourke-Ted-Cruz-2018-endorsement-13320986.php"> View Full Editorial </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
}

export default ThirdBar;