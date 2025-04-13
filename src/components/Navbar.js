import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title = "Set Title Here", aboutText = "About", mode = "light", toggleMode, toggleGreen }) {
    return (
      <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{aboutText}</Link>
              </li>
            </ul>
           
            <button type="button" className="btn btn-success mx-2 my-1" onClick={toggleGreen}>Green Mode</button>
            
            <form className="d-flex mx-2" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <div className="form-check form-switch mx-2">
              <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
          </div>
        </div>
      </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired,
    mode: PropTypes.string,
    toggleMode: PropTypes.func.isRequired, 
};
