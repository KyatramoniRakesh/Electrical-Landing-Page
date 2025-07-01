import React from 'react';
import '../../Css/Aboutcard.css';

const AboutCards = () => {
  return (
    <section className="vision-mission-wrapper py-5">
      <div className="container">
        <div className="row gx-4 align-items-stretch">

          {/* Left Gradient Column */}
          <div className="col-md-3">
            <div className="card h-100 border shadow-sm d-flex justify-content-center p-4 left-card">
              <h2 className="gradient-title mb-3">Vision</h2>
              <h2 className="gradient-title mb-3">Mission</h2>
              <h2 className="gradient-title mb-0">Commitment</h2>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-md-3">
            <div className="card h-100 bg-primary text-white p-4 shadow-sm">
              <h4 className="fw-bold mb-3">Vision</h4>
              <p className="mb-0">
                Our company strives to improve the productivity of our customers by constantly
                improving the quality and on time delivery by pushing ourselves against odds
                every time to meet our vision.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-3">
            <div className="card h-100 mission-card p-4 shadow-sm">
              <h4 className="fw-bold mb-3">Mission</h4>
              <p className="mb-0 text-dark">
                To meet or exceed our customer’s needs in a timely manner by providing quality
                products and continuously improving our internal operations and the service we provide.
                Our focus is to be the leader in the development, manufacture and supply of our products.
              </p>
            </div>
          </div>

          {/* Commitment Card */}
          <div className="col-md-3">
            <div className="card h-100 bg-white text-dark p-4 shadow-sm">
              <h4 className="fw-bold mb-3">Commitment</h4>
              <p className="mb-0">
                We have built a company culture based on an unconditional commitment to excellence.
                We utilize the most consistent and accurate materials in the industry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCards;
