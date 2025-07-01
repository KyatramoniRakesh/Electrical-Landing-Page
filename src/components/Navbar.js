import React from 'react';
import logo from '../images/logo.jpg';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


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
              <Link
                className="nav-link dropdown-toggle text-white"
                to="/product"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li>
                  <Link className="dropdown-item" to="/product">All Products</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/:categorySlug">Earthing Materials</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/:categorySlug">Gratings</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/:categorySlug">Light Poles</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
