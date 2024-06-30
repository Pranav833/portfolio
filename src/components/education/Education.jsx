import React, { useState } from "react";
import "./education.css";
import { FaUniversity, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Coursework from "./Coursework";
const Education = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            B. Tech
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Bachelor of Technology in Computer Science
                  <span className="score">
                    <br />&bull; CGPA - 8.78
                  </span>
                </h3>
                <span className="qualification__subtitle">
                  <span className="sub__icon">
                    <FaUniversity />
                  </span>
                  <span className="sub__text">
                    Vishwakarma Institute of Technology
                  </span>
                  <span className="sub__icon">
                    <br />
                    <FaLocationDot />
                  </span>
                  <span className="sub__text">Pune</span>
                  <span className="sub__icon">
                    <br />
                    <FaCalendarAlt />
                  </span>
                  <span className="sub__text">2021 - Present</span>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div className="l__side">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  12<sup>th</sup> High School Education(HSC)
                  <span className="score">
                    <br />&bull; Percentage - 92.5%
                  </span>
                </h3>
                <span className="qualification__subtitle">
                  <span className="sub__icon">
                    <FaUniversity />
                  </span>
                  <span className="sub__text">
                    Vidya Niketan English Medium School
                  </span>
                  <span className="sub__icon">
                    <br />
                    <FaLocationDot />
                  </span>
                  <span className="sub__text">Pune</span>
                  <span className="sub__icon">
                    <br />
                    <FaCalendarAlt />
                  </span>
                  <span className="sub__text">2019 - 2021</span>
                </span>

              </div>


            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  10<sup>th</sup> Secondary School Education(SSC)
                  <span className="score">
                    <br />&bull; Percentage - 89.5%
                  </span>
                </h3>
                <span className="qualification__subtitle">
                  <span className="sub__icon">
                    <FaUniversity />
                  </span>
                  <span className="sub__text">
                    Vidya Niketan English Medium School
                  </span>
                  <span className="sub__icon">
                    <br />
                    <FaLocationDot />
                  </span>
                  <span className="sub__text">Pune</span>
                  <span className="sub__icon">
                    <br />
                    <FaCalendarAlt />
                  </span>
                  <span className="sub__text">2019</span>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Third Year</h3>
                <span className="qualification__subtitle">
                  <div className="qualification__calendar">
                    <i className="bx bxs-badge-check" style={{ padding: '0.5rem'}}></i>
                    CGPA - 8.78
                    <br />
                    <i className="uil uil-calendar-alt"style={{ padding: '0.5rem'}}></i>
                    2023 - 2024
                  </div>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Second Year</h3>
                <span className="qualification__subtitle">
                  <div className="qualification__calendar">
                    <i className="bx bxs-badge-check" style={{ padding: '0.5rem'}}></i>
                    CGPA - 9.07
                    <br />
                    <i className="uil uil-calendar-alt" style={{ padding: '0.5rem'}}></i>
                    2022 - 2023
                  </div>
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">First Year</h3>
                <span className="qualification__subtitle">
                  <div className="qualification__calendar">
                    <i className="bx bxs-badge-check" style={{ padding: '0.5rem'}}></i>
                    CGPA - 9.43
                    <br />
                    <i className="uil uil-calendar-alt" style={{ padding: '0.5rem'}}></i>
                    2021 - 2022
                  </div>
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>

        </div>
        
        <Coursework/>
      </div>
    </section>
  );
};

export default Education;
