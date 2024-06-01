import "./Footer.css";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{position:"relative"}}>
      <footer className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>About Us</h3>
              <p>
                Discover our passion for quality craftsmanship and elegant
                design. Let us help you transform your space.
              </p>
            </div>
            <div className="footer-column">
              <h3>Explore</h3>
              <ul>
                <li>
                  <a href="#">Living Room</a>
                </li>
                <li>
                  <a href="#">Bedroom</a>
                </li>
                <li>
                  <a href="#">Dining Room</a>
                </li>
                <li>
                  <a href="#">Office</a>
                </li>
                <li>
                  <a href="#">Outdoor</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Newsletter</h3>
              <p>
                Subscribe to our newsletter for the latest updates and exclusive
                offers!
              </p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <p>&copy; 2024 Your Furniture Store. All rights reserved.</p>
            </div>
            <div className="social-links">
              <a href="#">
                <i>
                  <FaFacebook/>
                </i>
              </a>
              <a href="#">
                <i>
                  <FaTwitter/>
                </i>
              </a>
              <a href="#">
                <i>
                  <FaInstagram/>
                </i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
