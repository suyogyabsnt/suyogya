// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './namedata.json'
import classes from './lottiedemo.module.css'

class UncontrolledLottie extends Component {


  render(){

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet"
      }
    };

    return(
      <div className={classes.cointainer}>
        <Lottie className={classes.lottie} options={defaultOptions}
        />
      </div>
    )
  }
}

export default UncontrolledLottie