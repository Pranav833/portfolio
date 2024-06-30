import React from "react";
import "./contact.css";
import { SiGmail, SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact container section" id="contacts">
        <h2 className="section__title">More Details</h2>
     <span className="section__subtitle"></span>
      <div className="contact__container container">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <SiGmail />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">pranav.salunkhe38@gmail.com</span>
              <a
                href="mailto:pranav.salunkhe38@gmail.com"
                className="contact__button"
              >
                Write
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <FaPhoneAlt />
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">7796437507</span>
              <a href="tel:+917796437607" className="contact__button">
                Write
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>



      <div className="contact__container container">
        <div className="contact__content">
       
          <div className="contact__info">
          
            <div className="contact__card">
              <FaGithub />
              <h3 className="contact__card-title">Github</h3>
              <span className="contact__card-data">Pranav833</span>
              <a
                href="https://github.com/Pranav833"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <FaLinkedin />
              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">pranav-salunkhe38</span>
              <a
                href="https://www.linkedin.com/in/pranav-salunkhe38/"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact__container container">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <SiLeetcode />
              <h3 className="contact__card-title">Leetcode</h3>
              <span className="contact__card-data">Pranav833</span>
              <a
                href="https://leetcode.com/Pranav833/"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <SiCodeforces />
              <h3 className="contact__card-title">Codeforces</h3>
              <span className="contact__card-data">pranav.salunkhe21</span>
              <a
                href="https://codeforces.com/profile/pranav.salunkhe21"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
