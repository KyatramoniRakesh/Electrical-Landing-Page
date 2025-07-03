import React from 'react';
import logo from '../images/L2.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-bg sticky-top">
      <div className="container px-3 px-md-5">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Shafeena Electricals"
            className="d-inline-block align-middle"
            style={{ height: '55px' }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4 fs-5 fw-semibold">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About us</Link>
            </li>

            <li className="nav-item dropdown">
  <div className="d-flex align-items-center">
    {/* Products main link */}
    <Link className="nav-link text-white" to="/product">
      Products
    </Link>

    {/* Dropdown toggle with correct structure */}
    <a
      className="nav-link dropdown-toggle dropdown-toggle-split text-white"
      href="#"
      id="productsDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span className="visually-hidden">Toggle Dropdown</span>
    </a>

    {/* Dropdown menu must be next sibling */}
    <ul className="dropdown-menu" aria-labelledby="productsDropdown">
      <li>
        <Link className="dropdown-item" to="/products/cable-trays">Cable Trays</Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/products/earth-material">Earthing Materials</Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/products/grating">Gratings</Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/products/light-poles">Light Poles</Link>
      </li>
    </ul>
  </div>
</li>



            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
