import React from 'react';
import "./About.css"
import workingLady from "../../images/working-lady.png"

const About = () => {
    return (
      <div>
        <div>
          <div className="about-title-bg">
            <h2 className="about-title">About Us</h2>
          </div>
        </div>
        <div className=" mx-auto row  text-white about-card">
          <div className="col-lg-6">
            <div className="pt-2">
              <img
                style={{ width: "60%", height: "450px" }}
                src={workingLady}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <h2 className="fw-bolder mb-4">Our Story</h2>
              <p className="philosophy-text ">
                Patients have an important role to play at each stage of their
                care and the five safety tips will serve to encourage them to be
                more involved in their health care.
              </p>
              <p className="philosophy-text">
                Patients can do a lot of small things to make their health-care
                experience as safe as possible.
              </p>
              <p className="philosophy-text">
                Hospitals are places of recovery and healing but there are also
                safety risks for patients, such as infections, falls and
                medication errors that can happen despite our best efforts.
              </p>
              <p className="philosophy-text">
                Hospitals are places of recovery and healing but there are also
                safety risks for patients, such as infections, falls and
                medication errors that can happen despite our best efforts.
              </p>
              <p className="philosophy-text">
                Hospitals are places of recovery and healing but there are also
                safety risks for patients, such as infections, falls and
                medication errors that can happen despite our best efforts.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;