import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Enquiry = ({ show, handleClose, product }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!/^[A-Za-z ]{3,50}$/.test(value)) return 'Only letters (3–50 characters)';
        break;
      case 'email':
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value)) return 'Enter a valid Gmail address';
        break;
      case 'phone':
        if (!/^\d{10}$/.test(value)) return 'Enter 10 digit phone number';
        break;
      case 'subject':
        if (!/^[A-Za-z ]{3,100}$/.test(value)) return 'Only letters (3–100 characters)';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(form).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) newErrors[name] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      handleClose();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Body>
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-center w-100 fw-bold text-primary">Enquiry Form</h4>
            <Button
              variant="light"
              onClick={handleClose}
              className="position-absolute top-0 end-0 m-3"
            >
              &times;
            </Button>
          </div>

          {product && (
            <div className="text-center mb-3">
              <h5 className="text-secondary">Product: {product.title}</h5>
            </div>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="FULL NAME"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="SUBJECT"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.subject && <small className="text-danger">{errors.subject}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="MESSAGE"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && <small className="text-danger">{errors.message}</small>}
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" className="px-4" type="submit">
                Send Message
              </Button>
              <Button variant="warning" className="px-4" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Enquiry;
