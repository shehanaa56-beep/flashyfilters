import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavbarGlass = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar-glass">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          FlashyFilter
        </Link>

        <div className="navbar-menu">
          <Link to="/photopage" className="navbar-link">Photography</Link>
          <Link to="/" className="navbar-link">Home</Link>
          <a href="/photography" className="navbar-link">Stories</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <a href="/login" className="navbar-link">Login</a>
        </div>



        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="navbar-drawer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Link to="/" className="drawer-link" onClick={toggleMenu}>Home</Link>
          <Link to="/photopage" className="drawer-link" onClick={toggleMenu}>Photography</Link>
          <a href="/photography" className="drawer-link" onClick={toggleMenu}>Stories</a>
          <a href="#about" className="drawer-link" onClick={toggleMenu}>About</a>
          <a href="#contact" className="drawer-link" onClick={toggleMenu}>Contact</a>
          <a href="/login" className="drawer-link" onClick={toggleMenu}>Login</a>
        </motion.div>
      )}
    </nav>
  );
};

export default NavbarGlass;
