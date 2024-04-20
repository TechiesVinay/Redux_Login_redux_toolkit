import React, { useState } from "react";
import { Link } from "react-router-dom";
import i18n from '../../i18n'; // Import i18n configuration
import "./index.scss";
const Index = () => {
  const [language, setLanguage] = useState('en'); // State for selected language

  // Function to handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language using i18n
    setLanguage(lng); // Update selected language state

  };

  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link  link-color" aria-current="page" to="/">
                {i18n.t('Home')} {/* Translate 'Home' */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-color" to="/Signup">
                {i18n.t('Sign Up')} {/* Translate 'Sign Up' */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-color" to="/login">
                {i18n.t('Login')} {/* Translate 'Login' */}
              </Link>
            </li>
          </ul>
          <div className="dropdown">
            <button className="btn  link-color dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {i18n.t('Language')} {/* Translate 'Language' */}
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => changeLanguage('en')}>English</button></li>
              <li><button className="dropdown-item" onClick={() => changeLanguage('hi')}>Hindi</button></li>
              <li><button className="dropdown-item" onClick={() => changeLanguage('tl')}>Tamil</button></li>
              <li><button className="dropdown-item" onClick={() => changeLanguage('gj')}>Gujarati</button></li>
              {/* Add more language options here */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
