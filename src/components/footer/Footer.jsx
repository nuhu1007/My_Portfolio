import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Christian Montero
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
