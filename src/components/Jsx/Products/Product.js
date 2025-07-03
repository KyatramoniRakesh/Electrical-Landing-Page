import React from 'react'
import Products from './Products'
import Footer from '../../Footer'
import bannerImg from '../../../images/P.jpg'

const Product = () => {
  return (
    <>
      <div
        className="about-banner d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="fw-bold display-5">Products</h1>
        <p className="breadcrumb-text">
          <a href="/" className="text-white text-decoration-none">Home</a>
          <span className="mx-2">|</span>
          <span className="text-white">Products</span>
        </p>
      </div>
      <Products />
      <Footer />
    </>
  )
}

export default Product