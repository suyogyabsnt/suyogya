import React from 'react';
import { FaFacebookSquare,FaLinkedin,FaGithubSquare} from 'react-icons/fa'

import classes from './Social.module.css'


const Social = () => {
    return (
        <>

            <ul> 
                <li className={classes.list}><a className={classes.fb} href="https://www.facebook.com/suyogyabsnt/" target="_blank"><FaFacebookSquare/></a></li>
                <li className={classes.list}><a className={classes.lkin} href="https://www.linkedin.com/in/suyogya-basnet-68a7481b0/" target="_blank"><FaLinkedin/></a></li>
                <li className={classes.list}><a className={classes.git} href="https://github.com/suyogyabsnt?tab=repositories" target="_blank"><FaGithubSquare/></a></li>
            </ul>

        </>

    );
}

export default Social;