import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-bg sticky-top">
      <div className="container px-3 px-md-5">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
            alt="Mobile World"
            style={{ height: '50px' }}
          />
          <span className="ms-2 text-warning fw-bold fs-4">
            Mobile<span className="text-white">World</span>
          </span>
        </NavLink>

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
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About us</NavLink>
            </li>

            {/* Dropdown FIXED */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/products/smartphones">Smartphones</Link></li>
                <li><Link className="dropdown-item" to="/products/tablets">Tablets</Link></li>
                <li><Link className="dropdown-item" to="/products/accessories">Accessories</Link></li>
                <li><Link className="dropdown-item" to="/products/wearables">Wearables</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
