import React from 'react'
import './Clients.css'

import adani from '../images/Clients/oneplus.jpeg';
import sail from '../images/Clients/apple.jpeg';
import tata from '../images/Clients/Nokia.jpeg';
import usha from '../images/Clients/samsung.jpeg';
import apollo from '../images/Clients/iQOO.jpeg';
import jsw from '../images/Clients/oneplus.jpeg';
import kalyani from '../images/Clients/Realme.jpeg';
import msp from '../images/Clients/Oppo.jpeg';
import mukan from '../images/Clients/Google Pixel.jpeg';

const logos = [adani, sail, tata, usha, apollo, jsw, kalyani, msp, mukan];

const Clients = () => {
    return (
    <div className="client-slider-container py-2">
      <h3 className="text-center fw-bold mb-4">OUR CLIENTS</h3>
      <div className="slider">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`Client ${index}`} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Clients