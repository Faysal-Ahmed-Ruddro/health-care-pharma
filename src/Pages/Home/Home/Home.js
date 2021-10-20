import React from 'react';
import "./Home.css"
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../../About/About';
import Philosophy from '../Philosophy/Philosophy';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
      <div className="body">
        <Banner></Banner>
        <Services></Services>
        <About></About>
        <Testimonial></Testimonial>
        <Philosophy></Philosophy>
      </div>
    );
};

export default Home;