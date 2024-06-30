import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pranav Salunkhe</h1>

        <ul className="footer__list">
          <li>
            <a href="https://leetcode.com/u/Pranav833/" className="footer__link">
              Leetcode
            </a>
          </li>
          <li>
            <a href="https://codeforces.com/profile/pranav.salunkhe21" className="footer__link">
              Codeforces
            </a>
          </li>
          {/* <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li> */}
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/pranav-salunkhe38" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/Pranav833" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
          </a>
          <a href="mailto:pranav.salunkhe38@gmail.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-gmail'></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Pranav Salunkhe. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
