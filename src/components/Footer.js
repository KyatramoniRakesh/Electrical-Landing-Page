import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer text-white pt-4">
            <div className="container">
                <div className="row text-start g-4">

                    <div className="col-md-3 text-center text-md-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
                                alt="MobileWorld Logo"
                                style={{ height: '40px' }}
                                className="me-2"
                            />
                            <span className="fs-4 fw-bold text-warning">Mobile<span className="text-white">World</span></span>
                        </div>
                        <p className='small'>Subscribe to our mailing list to receive updates and special offers.</p>
                    </div>

                    <div className="col-md-3">
                        <h5 className="footer-title">QUICK LINKS</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/product">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5 className="footer-title">CONTACT</h5>
                        <p><FaMapMarkerAlt className="footer-icon" /> 2nd Floor,AK Building, KP Street, Chivarasta,Jadcherla,<br />Mahabubnagar, Telangana-509406</p>
                        <p><FaPhoneAlt className="footer-icon" />
                            <a href="tel:+919121949924" className="text-decoration-none text-white">+91 9121949924</a><br />
                            <a href="tel:+919991112229" className="text-decoration-none text-white num">+91 9991112229</a>
                        </p>
                        <p><FaEnvelope className="footer-icon" />
                            <a href="mailto:rakesh.rk1306@gmail.com" className="text-decoration-none text-white">rakesh.rk1306@gmail.com</a>
                        </p>
                    </div>

                    <div className="col-md-3">
                        <h5 className="footer-title">ROUTE MAP</h5>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27552.10357424881!2d78.391818!3d17.471284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cfd05700f%3A0x4a628d564e87d774!2s630%20LIG%20Flats%20Venture%202!5e1!3m2!1sen!2sin!4v1750936935290!5m2!1sen!2sin"
                            width="100%"
                            height="120"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15281.154789467386!2d78.13531256126484!3d16.76230638309833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca3014afe84e05%3A0xebefc10297073153!2sJadcherla%2C%20Telangana%20509301!5e0!3m2!1sen!2sin!4v1751634237007!5m2!1sen!2sin"
                            width="100%"
                            height="120"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe>

                        <h5 className="footer-title mt-4">SOCIAL MEDIA</h5>
                        <div className="d-flex gap-3">
                            <a href="https://facebook.com" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="https://instagram.com" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="https://twitter.com" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
                        </div>
                    </div>
                </div>

                <div className="container pt-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start small">
                        <a href="#" className="text-light">Privacy Policy</a>
                        <a href="#" className="text-light">Terms & Conditions</a>
                    </div>

                    <hr className="footer-line my-2" />

                    <div className="d-md-flex justify-content-between align-items-center text-center text-md-start small pb-4">
                        <p className="mb-0">&copy; 2025 <span className="fw-bold text-warning">MobileWorld</span>. All rights reserved.</p>
                        <p className="mb-0">Designed & Developed by <a href="https://github.com/KyatramoniRakesh" className="developer-link">Rakesh Kyatramoni</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
