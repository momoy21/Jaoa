import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.MOV' autoPlay loop muted={false}/>
      <div className='hero-content'>
        <div className='hero-btns'>
          <Button
            className='btn-mobile btn--outline'
            buttonSize='btn--large'
          >
            <p class="underline-text">Start Now!</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
