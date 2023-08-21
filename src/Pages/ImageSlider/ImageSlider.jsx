
import React from "react";


import { Slider } from 'react-bootstrap'; // Import Carousel component

import image1 from './img/intro-carousel/3.jpg';
import image2 from './img/intro-carousel/2.jpg';
// Import other images...

const ImageSlider = () => {
  return (
    <Slider>
      <Slider.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h1>IYKONS</h1>
          <p>Your text here...</p>
        </Carousel.Caption>
      </Slider.Item>
      <Slider.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Slider.Caption>
          <h1>IYKONS</h1>
          <p>Your text here...</p>
        </Slider.Caption>
      </Slider.Item>
      {/* Add more Carousel.Items for additional images */}
    </Slider>
  );
};

export default ImageSlider;
