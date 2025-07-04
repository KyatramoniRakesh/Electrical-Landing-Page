import React from 'react';
import bannerImage from '../images/B.jpg'; 
import './Banner.css';

const Banner = () => {
  return (
    <div
      className="banner d-flex align-items-center justify-content-center text-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="content-box px-3">
        <h1 className="display-5 fw-bold">
          Discover the Latest in<br />Smartphones & Gadgets
        </h1>
        <p className="lead mt-3">
          Explore top brands, unbeatable prices & exclusive offers!
        </p>
        <a href="/product" className="read-btn btn rounded-pill px-4 py-2 mt-3">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
