import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Rinor Zeqiri</h3>
          <p>Frontend Developer & UI/UX Designer</p>
        </div>
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Rinor Zeqiri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;