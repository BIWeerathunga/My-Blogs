import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slideshow() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img  src={require('../images/12.png')} style={{width:"600px",height:"700px",marginTop:"-40px"}}    alt="Slide 1" />
      </div>
      <div>
        <img  src={require('../images/16.jpg')} style={{width:"650px",height:"550px",marginTop:"70px"}} alt="Slide 2" />
      </div>
      <div>
        <img  src={require('../images/17.jpg')} style={{width:"650px",height:"550px",marginTop:"70px"}} alt="Slide 3" />
      </div>
      <div>
        <img  src={require('../images/15.png')} style={{width:"650px",height:"500px",marginTop:"80px"}}  alt="Slide 4" />
      </div>
      
    </Carousel>
  )
}

export default Slideshow;
