import React,{useEffect} from 'react';

import classes from './About.module.css'
import AboutRight from '../../components/AboutRight/About'
import AboutLeft from '../../components/AboutLeft/About'

const About=()=>{
   
    return(
        <div className={classes.AboutMainContainer}>
            <div className={classes.Sticky}><AboutLeft/></div>
            <div className={classes.AboutInfo}> <AboutRight/></div>
        </div>
    );
}

export default About;