import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImageCarousel = ({ images }) => {
  let settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="ImageCarousel">
      <Slider {...settings}>
        {images.map((img, i) => {
          console.log(img, i);
         return (
           <div key={i} className="fileUpload-Container withImage">
             <img src={img} />
           </div>
         )
       })}
      </Slider>
    </div>
  )
}

export default ImageCarousel;
