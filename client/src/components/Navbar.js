import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        <FaHome className="navbar-icon" />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Add Student Details
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tasklist" className="nav-link">
              Students List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
