import React from 'react';
import './Services.css';
import cs from "../images/S.jpg";
import rs from "../images/S1.jpg";
import is from "../images/S2.jpg";

const Services = () => {
  return (
    <div className="services-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-black">Our Services</h2>
        <div className="row g-4 justify-content-center">

          <div className="col-md-6 col-lg-4">
            <div className="service-card position-relative">
              <img src={cs} className="img-fluid w-100" alt="Retail Store Services" />
              <div className="service-label">Retail Store Services</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="service-card position-relative">
              <img src={rs} className="img-fluid w-100" alt="Online Sales & Delivery" />
              <div className="service-label">Online Sales & Delivery</div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="service-card position-relative">
              <img src={is} className="img-fluid w-100" alt="Device Repairs & Support" />
              <div className="service-label">Device Repairs & Support</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
