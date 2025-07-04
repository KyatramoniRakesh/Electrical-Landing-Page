// src/pages/Aboutus.js
import React from 'react';
import About from '../About';
import Footer from '../Footer';
import bannerImg from '../../images/AB1.jpg';
import '../Css/Aboutus.css';
import Cards from './Cards/Cards';

const Aboutus = () => {
  return (
    <div>
      <div
        className="about-banner d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="fw-bold display-5">About Us</h1>
        <p className="breadcrumb-text">
          <a href="/" className="text-white text-decoration-none">Home</a>
          <span className="mx-2">|</span>
          <span className="text-white">About us</span>
        </p>
      </div>

      <div className="welcome py-5 text-start">
        <div className="container">
          <h1 className="fw-bold mb-3">
            Welcome to <span className="text-primary">Mobile</span><span className="text-warning">World</span>
          </h1>
          <h3 className="fw-semibold text-secondary mb-4">
            Your Trusted Partner in Smart Technology
          </h3>

          <h4 className="lead">
            At <span className="text-primary fw-semibold">Mobile</span><span className="text-warning fw-semibold">World</span>, we specialize in delivering the latest and most reliable mobile electronics and accessories. Whether you're looking for cutting-edge smartphones, stylish wearables, or powerful tablets, we've got you covered.
          </h4>

          <ul className="mt-3 list-unstyled">
            <li>
              <strong>Smartphones:</strong> Explore a wide range of Android and iOS phones from top global brands.
            </li>
            <li>
              <strong>Tablets:</strong> Performance-focused tablets for productivity, gaming, or media consumption.
            </li>
            <li>
              <strong>Wearables:</strong> Smartwatches and fitness trackers that keep you connected and active.
            </li>
            <li>
              <strong>Accessories:</strong> Chargers, earphones, cases, and everything to complete your mobile setup.
            </li>
          </ul>
        </div>
      </div>

      <Cards />
      <Footer />
    </div>
  );
};

export default Aboutus;
