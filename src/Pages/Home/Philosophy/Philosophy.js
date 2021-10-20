import React from 'react';
import "./Philosophy.css"
import doctors from "../../../images/successful-medical-team.jpg"

const Philosophy = () => {
    return (
      <div style={{ backgroundColor: "#1565c0" }}>
        <div className="row mx-auto ">
          <div className="col-lg-6">
            <img
              className="doctors-img"
              style={{ width: "100%" }}
              src={doctors}
              alt=""
            />
          </div>
          <div className="col-lg-6  p-3 ">
            <div className=" my-5">
              <h2 className="fw-bolder text-white">OUR PHILOSOPHY</h2>
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
              <button className=" custom-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Philosophy;