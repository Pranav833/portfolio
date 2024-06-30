import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle"></span>

      <div className="experience__container">
        <div className="timeline">
          <div className="timeline__item">
            <h3 className="timeline__title">
              <i
                className="bx bxs-briefcase-alt-2 timeline__icon"
                style={{ padding: "0.5rem" }}
              ></i>
              Embedded Software Engineer
            </h3>

            <h4 className="timeline__subtitle">
              <i className="bx bxs-map"></i> Vishwakarma Institute of Technology
            </h4>
            <h4 className="timeline__subtitle">
              <i className="bx bxs-calendar"></i> November 2022 - July 2023
            </h4>
            <ol className="timeline__text task__list">
              <li>
                Developed Arduino libraries for motor control and PID control
                systems using OOP principles, effectively reducing the number of
                global variables by 30%.
              </li>
              <li>
                Implemented robot locomotion systems for both holonomic drive of
                3-wheel omni and 4-wheel mecanum drive platforms.
              </li>
              <li>
                Designed and developed parallel processing techniques to enhance
                robot efficiency by enabling the robot to carry out 2 or more
                tasks simultaneously.
              </li>
              <li>
                Conducted localization of robots using camera feedback, ensuring
                accurate positioning and navigation with an error less than 5%.
              </li>
              <li>
                Conducted sessions in software and robotics workshops for more
                than 100 students.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
