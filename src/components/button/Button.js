import React from 'react';
import './Button.css'

import Resume from '../../data/Suyogya-Resume.doc'

const Button=(props)=>{

    const onClickHandler=()=>{
        console.log('Button Clicked')
    }

    return(
        <>
         <a href={Resume} download><div className='button' onclick={onClickHandler} {...props}>
            {props.name}
        </div>
       </a>
    
        </>
    );
}

export default Button;