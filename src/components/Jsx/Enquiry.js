// src/components/Enquiry.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Enquiry = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="md">
      <Modal.Body>
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-center w-100 fw-bold text-primary">Enquiry Form</h4>
            <Button variant="light" onClick={handleClose} className="position-absolute top-0 end-0 m-3">
              &times;
            </Button>
          </div>

          {product && (
            <div className="text-center mb-3">
              <h5 className="text-secondary">Product: {product.title}</h5>
            </div>
          )}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="FULL NAME" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="EMAIL ADDRESS" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="PHONE NUMBER" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="SUBJECT" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="MESSAGE" />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" className="px-4">Send Message</Button>
              <Button variant="warning" className="px-4" onClick={handleClose}>Close</Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Enquiry;
