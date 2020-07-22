import React from 'react';
import SplitText from 'react-pose-text';
import { TextFocus } from 'react-text-effects';


import Routes from '../../components/routes/routes';
import './App.css';
import Button from '../../components/button/Button';
import SocialMedia from '../../components/socialMediaLinks/Social';
import ProfImage from '../../components/profImage/profImage';

const Main=()=>{
  const charPoses = {
    exit: { y: 20, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: ({ charInWordIndex }) => ({
        type: 'spring',
        delay: charInWordIndex * 30,
        stiffness: 500 + charInWordIndex * 150,
        damping: 10 - charInWordIndex * 1
      })
    }
  };
  return (
    <div className="App">
      <h3>
        Front End Developer - React/ReactNative
      </h3>

      <h1 className="Name">
        <TextFocus type='in' duration='2s'>Suyogya Singh Basnet
      
        </TextFocus>
      </h1>
      <ProfImage />
      <SocialMedia/>
      <Button name='Download Resume'/>
      <Routes />

    </div>

  );
}
export default Main;
