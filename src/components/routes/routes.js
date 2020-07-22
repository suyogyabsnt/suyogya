import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import classes from './routes.module.css'


const Routes=()=>{
    return(
        <>
            <Router>
            <ul className={classes.ulist}>
                <li className={classes.list}><Link to="/about"><a>About</a></Link>   </li>
                <li className={classes.list}>/</li>
                <li className={classes.list}><Link to="/work">Work</Link></li> 
                <li className={classes.list}>/</li>
                <li className={classes.list}><Link to="/contact">Contact</Link></li> 
            </ul>    
            </Router>
        
        </>
    );
}

export default Routes;