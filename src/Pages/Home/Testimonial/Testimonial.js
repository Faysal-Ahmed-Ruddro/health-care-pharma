import React from 'react';
import "./Testimonial.css"
import img1 from "../../../images/tesimonialPic1.jpg"
import img2 from "../../../images/tesimonialPic2.jpg"

const Testimonial = () => {
    return (
      <div className="testimonial-body">
        <h2 className="fw-bold">What Patient Say?</h2>
        <hr style={{color:"blue",height:"3px"}} className="my-4 w-25 mx-auto" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center my-1 ">
              <div className="testimonialBg">
                <div>
                  {" "}
                  <img className="testimonialPic" src={img1} alt="" />
                </div>
                <div>
                  <p className="testimonialText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, excepturi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center my-1 ">
              <div className="testimonialBg ">
                <div>
                  <img className="testimonialPic" src={img2} alt="" />
                </div>
                <div>
                  <p className="testimonialText ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, excepturi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial;