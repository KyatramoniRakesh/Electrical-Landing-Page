import React from 'react'
import './Services.css'
import cs from "../images/cs.png"
import rs from "../images/rs.webp"
import is from "../images/is.webp"
const Services = () => {
    return (
        <div class="services-section py-2 bg-light">
            <div class="container">
                <h2 class="text-center fw-semibold mb-4">OUR SERVICES</h2>
                <div class="row g-5 justify-content-center">

                    <div class="col-md-6 col-lg-4">
                        <div class="service-card position-relative">
                            <img src={cs} class="img-fluid w-100" alt="Commercial Services" />
                            <div class="service-label">Commercial Services</div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="service-card position-relative">
                            <img src={rs} class="img-fluid w-100" alt="Residential Services" />
                            <div class="service-label">Residential Services</div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="service-card position-relative">
                            <img src={is} class="img-fluid w-100" alt="Industrial Services" />
                            <div class="service-label">Industrial Services</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services