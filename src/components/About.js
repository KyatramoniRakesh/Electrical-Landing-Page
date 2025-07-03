import React from 'react'
import './About.css';
import abt_img from '../images/AboutUS.jpg';


const About = () => {
    return (
        <section className="py-5 bg-light" id="about">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center">
                        <img
                            src={abt_img}
                            alt="About Shafeena Electricals"
                            className="abt_img img-fluid rounded-image"
                        />
                    </div>

                    <div className="col-lg-6">
                        <h5 className="text-secondary fw-semibold fs-2 text-start">Welcome</h5>
                        <h2 className="fw-bold text-start">
                            <span className="h2_sh fw-semibold"> ElectroStruct </span>
                            <span className="text-warning fw-semibold"> Electricals</span>
                        </h2>
                        <p className="mt-4 text-muted fs-5 text-start" style={{ lineHeight: '1.8rem' }}>
                            ElectroStruct Electricals is your trusted partner for high-quality electrical solutions tailored to industrial, commercial, and residential needs. Our dedication to excellence ensures innovative, safe, and efficient electrical systems that power your projects with confidence.
                            Discover the difference with ElectroStruct Electricals – where your satisfaction is our priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About