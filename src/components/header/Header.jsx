import React, { useState } from "react";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    // <div>Header</div>
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Pranav
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                <div className="nav__tag">Home</div>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                <div className="nav__tag">Skills</div>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#education"
                onClick={() => setActiveNav("#education")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-graduation-cap nav__icon"></i>
                <div className="nav__tag">Education</div>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                <div className="nav__tag">Experience</div>
              </a>
            </li>


            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-folder-check nav__icon"></i>
                <div className="nav__tag">Projects</div>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#achievements"
                onClick={() => setActiveNav("#achievements")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-trophy nav__icon"></i>
                <div className="nav__tag">Achievements</div>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#certifications"
                onClick={() => setActiveNav("#certifications")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-award nav__icon"></i>
                <div className="nav__tag">Certifications</div>
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contacts"
                onClick={() => setActiveNav("#contacts")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-comments-alt nav__icon"></i>
                <div className="nav__tag">Contacts</div>
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
