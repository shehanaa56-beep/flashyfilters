import React from 'react';
import { motion } from 'framer-motion';

const FooterGlass = () => {
  return (
    <footer className="footer-glass">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-logo">FlashyFilter</h3>
            <p>Your premier destination for wedding inspiration and stories.</p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Newsletter</h4>
            <p>Subscribe for the latest wedding inspiration.</p>
            <div className="newsletter-signup">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <button className="social-icon" aria-label="Facebook"></button>
            <button className="social-icon" aria-label="Instagram"></button>
            <button className="social-icon" aria-label="Twitter"></button>
            <button className="social-icon" aria-label="Pinterest"></button>
          </div>
          <p>&copy; 2024 FlashyFilter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterGlass;
