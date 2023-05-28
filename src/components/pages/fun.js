import React from 'react';
import { SliderData } from "../SliderData";
import "../../App.css";
import ImageSlider from '../ImageSlider';

function fun() {
    return (
          <ImageSlider slides={SliderData} />
    );
  }
  
  export default fun;