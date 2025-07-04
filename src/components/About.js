import React from 'react';
import './About.css';
import abt_img from '../images/C1.jpg'
const About = () => {
  return (
    <section className="py-5 bg-light" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img
              src={abt_img}
              alt="About Mobile World"
              className="abt_img img-fluid rounded-image"
            />
          </div>

          <div className="col-lg-6">
            <h5 className="fw-semibold text-start">Welcome</h5>
            <h2 className="fw-bold text-start">
              <span className="h2_sh">Mobile</span>
              <span className="text-warning">World</span>
            </h2>
            <p className="mt-4 fs-5 text-start" style={{ lineHeight: '1.8rem' }}>
              At <strong>MobileWorld</strong>, we bring you the best in mobile innovation—smartphones, wearables, tablets, and accessories. Explore the latest tech, exclusive deals, and expert support all in one place.
              <br /><br />
              Upgrade smarter. Shop faster. Live connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
