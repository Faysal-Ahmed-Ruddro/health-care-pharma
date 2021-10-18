import React from 'react';
import "./About.css"
import workingLady from "../../images/working-lady.jpg"

const About = () => {
    return (
      <div>
        <div>
          <div className="about-title-bg">
            <h2 className="about-title">About Us</h2>
          </div>
        </div>
        <div className=" mx-auto row p-5 text-white about-card">
          <div className="col-lg-6">
            <div className="p-4">
              <img style={{width:"100%",height:"400px"}} src={workingLady} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <h2>Our Story</h2>
              <p className="about-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                qui aliquid inventore optio iusto, molestias perspiciatis,
                suscipit nobis quam fugiat ipsa! Cupiditate maxime, cumque autem
                esse obcaecati repellendus temporibus atque inventore eaque
                facere quisquam molestiae natus sint illum quia blanditiis a sed
                deleniti quibusdam, veritatis placeat amet nam distinctio. Sunt
                aut dicta nulla harum corporis et nesciunt. Deserunt doloribus
                voluptatem dicta nesciunt porro commodi, voluptatibus quod!
                Nostrum, incidunt! Tempore, laborum! Sed aperiam autem non
                assumenda quaerat adipisci et ipsam dolorem, ullam harum
                dignissimos pariatur, quisquam in neque. Animi repellat unde
                numquam dicta, ratione a quo quidem dolore quisquam optio
                molestias vel totam dolores omnis non. Impedit iure nisi dicta
                officia eius. Distinctio voluptatum reiciendis sunt soluta
                numquam? Doloribus odit aut reiciendis blanditiis sint eos, quis
                porro enim quisquam vitae laudantium ullam repellat deleniti
                dignissimos? 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;