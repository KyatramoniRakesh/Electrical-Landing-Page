import React from 'react'
import About from '../About'
import Footer from '../Footer'
import bannerImg from '../../images/About.png'
import '../Css/Aboutus.css'
// import AboutCards from './ABoutCard'
import Cards from './Cards/Cards'
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
            Welcome to <span className="text-primary">SHAFEENA</span>{' '}
            <span className="text-warning">ELECTRICALS</span>
          </h1>
          <h3 className="fw-semibold text-secondary mb-4">
            Your Trusted Partner in Electrical Solutions
          </h3>

          <h4 className="lead">
            At <span className="text-primary fw-semibold">SHAFEENA</span>{' '}
            <span className="text-warning fw-semibold">ELECTRICALS</span>, we
            specialize in providing high-quality electrical products and solutions
            for industrial, commercial, and residential projects. With a
            commitment to excellence and customer satisfaction, we are your
            reliable source for:
          </h4>

          <ul className="mt-3 list-unstyled">
            <li>
              <strong>Cable Trays:</strong> Durable, efficient, and customizable solutions for cable management.
            </li>
            <li>
              <strong>Earth Materials:</strong> Top-quality grounding products to ensure safety and compliance.
            </li>
            <li>
              <strong>Light Poles:</strong> Sturdy and aesthetically designed poles for all lighting needs.
            </li>
          </ul>
        </div>
      </div>
      <Cards/>
      <Footer />
    </div>
  )
}

export default Aboutus