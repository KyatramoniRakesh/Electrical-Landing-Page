import React, { useState } from 'react';
import bannerImg from '../../images/contact-us.webp';
import '../Css/Contact.css';
import Footer from '../Footer';

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        if (!/^[A-Za-z ]{3,50}$/.test(value)) return 'Enter a valid name (only letters, 3–50 characters)';
        break;
      case 'email':
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) return 'Enter a valid Gmail address';
        break;
      case 'phone':
        if (!/^\d{10}$/.test(value)) return 'Phone must be 10 digits';
        break;
      case 'subject':
        if (!/^[A-Za-z ]{3,100}$/.test(value)) return 'Subject should contain only text (3–100 chars)';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        break;
      default:
        break;
    }
    return '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    Object.entries(form).forEach(([name, value]) => {
      const error = validate(name, value);
      if (error) formErrors[name] = error;
    });

    if (Object.keys(formErrors).length === 0) {
      alert('Form submitted successfully!');
      // Backend logic here
    } else {
      setErrors(formErrors);
    }
  };

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
          <span className="text-primary fw-bold">MOBILE</span>
          <span className="text-warning fw-bold">WORLD</span> — Your Trusted Smartphone Partner in Hyderabad.
        </h4>

        <div className="row g-4">
          <div className="col-md-6 text-start" id='scale-up-center'>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control input-border"
                    placeholder="FULL NAME"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control input-border"
                    placeholder="EMAIL ADDRESS"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control input-border"
                    placeholder="PHONE NUMBER"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control input-border"
                    placeholder="SUBJECT"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.subject && <small className="text-danger">{errors.subject}</small>}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  className="form-control input-border"
                  placeholder="MESSAGE"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {errors.message && <small className="text-danger">{errors.message}</small>}
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Submit</button>
              </div>
            </form>
          </div>

          <div className="col-md-6 contact-details py-4 text-start">
            <h5>
              <span className="text-primary fw-bold">MOBILE</span>
              <span className="text-warning fw-bold">WORLD</span>
            </h5>

            <div className="row mt-3">
              <div className="col-sm-6">
                <h6 className="fw-bold">Postal Address</h6>
                <p className="mb-1">B8/714, Lig Venture-2, 4th Phase,</p>
                <p className="mb-1">KPHB Colony, Kukatpally,</p>
                <p className="mb-3">Hyderabad, Telangana - 500085</p>

                <h6 className="fw-bold">Phone</h6>
                <p className="mb-1">+91 9121949924</p>
                <p className="mb-3">+91 9991112220</p>
              </div>

              <div className="col-sm-6">
                <h6 className="fw-bold">Customer Support</h6>
                <p>support@mobileworld.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0">
        <h5 className="footer-title">ROUTE MAP</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27552.10357424881!2d78.391818!3d17.471284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913cfd05700f%3A0x4a628d564e87d774!2s630%20LIG%20Flats%20Venture%202!5e1!3m2!1sen!2sin!4v1750936935290!5m2!1sen!2sin"
          width="100%"
          height="450vh"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
