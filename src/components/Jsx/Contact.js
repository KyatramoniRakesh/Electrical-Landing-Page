import React from 'react'
import bannerImg from '../../images/contact-us.webp'
import '../Css/Contact.css'
import Footer from '../Footer'

const Contact = () => {
    return (
        <div>
            <div
                className="about-banner d-flex flex-column justify-content-center align-items-center text-white text-center"
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <h1 className="fw-bold display-5">Contact</h1>
                <p className="breadcrumb-text">
                    <a href="/" className="text-white text-decoration-none">Home</a>
                    <span className="mx-2">|</span>
                    <span className="text-white">Contact</span>
                </p>
            </div>


            <div className="container py-5 contact-container">
                <h4 className="text-center mb-4">
                    <span className="text-primary fw-bold">SHAFEENA </span>
                    <span className="text-warning fw-bold">ELECTRICALS</span> is the market leader in the Supplier of Electrical Materials. Our setup is situated in Hyderabad.
                </h4>

                <div className="row g-4" >
                    <div className="col-md-6 text-start" id='scale-up-center'>
                        <form>
                            <div className="row mb-3 ">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control input-border " placeholder="FULL NAME" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control input-border" placeholder="EMAIL ADDRESS" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control input-border" placeholder="PHONE NUMBER" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Subject</label>
                                    <input type="text" className="form-control input-border" placeholder="SUBJECT" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea rows="4" className="form-control input-border" placeholder="MESSAGE"></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary px-4">Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 contact-details py-4 text-start">
                        <h5 className='text-start '>
                            <span className="text-primary fw-bold ">SHAFEENA </span>
                            <span className="text-warning fw-bold">ELECTRICALS</span>
                        </h5>

                        <div className="row mt-3">
                            <div className="col-sm-6">
                                <h6 className="fw-bold">Postal Address</h6>
                                <p className="mb-1">B8/714, Lig Venture-2, 4th Phase,</p>
                                <p className="mb-1">KPHB Colony, Kukatpally,</p>
                                <p className="mb-3">Hyderabad, Telangana-500085</p>

                                <h6 className="fw-bold">Phone</h6>
                                <p className="mb-1">+91 9515113440</p>
                                <p className="mb-3">+91 9032408058</p>
                            </div>

                            <div className="col-sm-6">
                                <h6 className="fw-bold">General Enquiries</h6>
                                <p>shafeenaelectricals@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-0'>
                 <h5 className="footer-title">ROUTE MAP</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27552.10357424881!2d78.391818!3d17.471284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cfd05700f%3A0x4a628d564e87d774!2s630%20LIG%20Flats%20Venture%202!5e1!3m2!1sen!2sin!4v1750936935290!5m2!1sen!2sin"
                            width="100%"
                            height="450vh"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                        
            </div>
            <Footer/>
        </div>

    )
}

export default Contact