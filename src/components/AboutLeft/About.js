import React from 'react';

import classes from './About.module.css';
import Routes from '../routes/routes'

const About = () => {
    return (
        <div>
            <div className={classes.About}>
                <h1 className={classes.AboutText}>About</h1>
            </div>
            <div className={classes.Routes}>
                <Routes />
            </div>
        </div>

    );
}

export default About;