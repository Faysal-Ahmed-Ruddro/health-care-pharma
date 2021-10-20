import React from 'react';
import "./Home.css"
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../../About/About';
import Team from '../../Team/Team';

const Home = () => {
    return (
      <div className="body">
        <Banner></Banner>
        <Services></Services>
        <About></About>
        <Team></Team>
      </div>
    );
};

export default Home;