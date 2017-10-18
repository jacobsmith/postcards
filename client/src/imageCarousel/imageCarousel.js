import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.css';
var ReactDOM = require('react-dom');


const ImageCarousel = ({ images }) => {
  let settings = {
    showArrows: true
  }

  return (
    <div className="ImageCarousel">
      <Carousel {...settings}>
        {images.map((img, i) => {
          console.log(img, i);
         return (
           <div key={i} className="fileUpload-Container withImage">
             <img src={img} />
           </div>
         )
       })}
     </Carousel>
    </div>
  )
}

export default ImageCarousel;
