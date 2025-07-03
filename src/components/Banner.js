import React from 'react'
import bannerImage from '../images/B.jpg'; 
import './Banner.css'
const Banner = () => {
  return (
     <div
      className="banner d-flex align-items-center justify-content-center text-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className=" content-box px-3">
        <h1 className="display-5 fw-bold ">
          Electrical Solutions & Supply to Residentials,<br />
          Commercial & Industries.
        </h1>
        <a href="#about" className="read-btn btn btn-primary rounded-pill px-4 py-2 mt-3">
          Read More
        </a>
      </div>
    </div>
  )
}

export default Banner