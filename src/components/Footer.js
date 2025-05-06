import React from 'react';
import '../components/Style/Footer.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-section">
        <img src={logo} className="footer-logo" alt="ZilBiz Logo" />
      </div>

      {/* Contact Information Section */}
      <div className="footer-section">
        <h3>Get In Touch</h3>
        <p>contact@zilbiz.mu</p>
        <p>(+230) 5932 5196</p>
        <p>Flic-en-flac</p>
      </div>

      {/* Navigation Links Section */}
      <div className="footer-section">
        <h3>Navigations</h3>
        <ul>
          <li>
            <Link to="/about" aria-label="About">
              About
            </Link>
          </li>
          <li>
            <Link to="/faq" aria-label="FAQ">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" aria-label="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/admin" aria-label="Admin">
              Admin
            </Link>
          </li>
        </ul>
      </div>

      {/* Legal Notice Section */}
      <div className="footer-section">
        <h3>Legal Notice</h3>
        <ul>
          <li>
            <Link to="/terms&conditions" aria-label="Terms and Conditions">
              Terms and Conditions
            </Link>
          </li>
          <li>
            <Link to="/terms-of-use" aria-label="Terms of Use">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link to="/options" aria-label="Options">
              Options
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;