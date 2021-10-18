import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-bootstrap';
import img1 from "../../../images/bg1.jpg"
import img2 from "../../../images/slider-2.jpg"

const Banner = () => {
    return (
      <Carousel fade >
        <Carousel.Item>
          <img
            style={{width:"100%", height:"550px"}}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption  className="carousel-text">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{width:"100%", height:"550px"}}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-text">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;