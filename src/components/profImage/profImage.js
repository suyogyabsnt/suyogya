import React from 'react';

import classes from './profImage.module.css'
import profPic from '../../data/profPic.png'

const ProfImage=()=>{
    return(
        <div className={classes.container}>
            <img className={classes.image} src={profPic} alt='Profile Picture'></img>
        </div>
    );
}

export default ProfImage;