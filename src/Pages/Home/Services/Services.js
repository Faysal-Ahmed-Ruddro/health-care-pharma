import React, { useEffect, useState } from 'react';
import "./Services.css"
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("./fakeData.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
    return (
      <div className="body">
        <div className="container ">
          <h2 className="my-5 p-4 service-title">Our Services</h2>
        </div>
        <div className="row container mx-auto">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;