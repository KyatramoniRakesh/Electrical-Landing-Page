import React from 'react'
import './Clients.css'

import adani from '../images/Clients/adani.png';
import sail from '../images/Clients/Sail.png';
import tata from '../images/Clients/tata.webp';
import usha from '../images/Clients/ushamartin.jpeg';
import apollo from '../images/Clients/apl_logo_white_bg.png';
import jsw from '../images/Clients/jwl steel.png';
import kalyani from '../images/Clients/kalyanisteel.jpg';
import msp from '../images/Clients/msp.webp';
import mukan from '../images/Clients/mukund.png';

const logos = [adani, sail, tata, usha, apollo, jsw, kalyani, msp, mukan];

const Clients = () => {
    return (
    <div className="client-slider-container py-4">
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