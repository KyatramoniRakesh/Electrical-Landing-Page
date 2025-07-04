import React from 'react';
import Products from './Products';
import Footer from '../../Footer';
import bannerImg from '../../../images/Pro.jpg'
import './Product.css'
const Product = () => {
  return (
    <>
      <div
        className="about-banner d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
        }}
      >
        <h1 className="fw-bold display-5">Our Products</h1>
        <p className="breadcrumb-text mt-2">
          <a href="/" className="text-white text-decoration-none">Home</a>
          <span className="mx-2">|</span>
          <span className="text-warning">Products</span>
        </p>
      </div>

      <Products />
      <Footer />
    </>
  );
};

export default Product;
