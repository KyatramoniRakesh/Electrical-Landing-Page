import React from 'react';
import './Footer.css';
import logo from '../images/logo.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer text-white pt-4">
            <div className="container">
                <div className="row text-start g-5">

                    <div className="col-md-3">
                        <img src={logo} alt="Shafeena Electricals" className="footer-logo mb-3" />
                        <p>Subscribe to our mailing list to receive new updates and special offers:</p>
                    </div>

                    <div className="col-md-3">
                        <h5 className="footer-title">QUICK LINKS</h5>
                        <ul className="list-unstyled ">
                            <li className="mb-2"><a href="#home">Home</a></li>
                            <li className="mb-2"><a href="#about">About Us</a></li>
                            <li className="mb-2"><a href="#products">Products</a></li>
                            <li className="mb-2"><a href="#gallery">Gallery</a></li>
                            <li className="mb-2"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5 className="footer-title">CONTACT</h5>
                        <p><FaMapMarkerAlt className="footer-icon" /> B8/714, Lig Venture-2, 4th Phase, KPHB Colony, Kukatpally,<br />Hyderabad, Telangana-500085</p>
                        <p><FaPhoneAlt className="footer-icon" /> +91 9515113440 <br /> <span className='num'>+91 9032408058</span> </p>
                        <p><FaEnvelope className="footer-icon" /> shafeenaelectricals@gmail.com</p>
                    </div>

                    <div className="col-md-3">
                        <h5 className="footer-title">ROUTE MAP</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27552.10357424881!2d78.391818!3d17.471284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cfd05700f%3A0x4a628d564e87d774!2s630%20LIG%20Flats%20Venture%202!5e1!3m2!1sen!2sin!4v1750936935290!5m2!1sen!2sin"
                            width="100%"
                            height="120"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe>



                        <h5 className="footer-title mt-4">SOCIAL MEDIA</h5>
                        <div className="d-flex gap-4">
                            <a href="#" className="social-icon" id='icon'><FaFacebookF /></a>
                            <a href="#" className="social-icon" id='icon'><FaInstagram /></a>
                            <a href="#" className="social-icon" id='icon'><FaLinkedinIn /></a>
                            <a href="#" className="social-icon" id='icon'><FaTwitter /></a>
                        </div>
                    </div>

                </div>

                <div className="container pt-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start small">
                        <div className="mb-2 mb-md-0">
                            <a href="#" className="text-light">Privacy Policy</a>
                        </div>

                        <div>
                            <a href="#" className="text-light">Terms & Conditions</a>
                        </div>
                    </div>

                    <hr className="footer-line my-2" />

                    <div className="d-md-flex justify-content-between align-items-center text-center text-md-start small pb-4">
                        <div className="text-light">
                            <p className="mb-0">&copy; 2024 <span className="fw-bold">Shafeena Electricals</span>. All rights reserved.</p>
                        </div>
                        <div className="text-light">
                            Designed & Developed By <a href="#" className="developer-link text-decoration-underline">NAVAKARANA TECHNOLOGIES</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;