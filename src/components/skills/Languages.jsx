import React from "react";
import { TbSql } from "react-icons/tb";
const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Languages</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-python"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              {/* <span className="skills__level">Level</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-c-plus-plus"></i>
            <div>
              <h3 className="skills__name">C++</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-java"></i>
            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-go-lang"></i>
            <div>
              <h3 className="skills__name">Go</h3>
              {/* <span className="skills__level">Level</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              {/* <span className="skills__level">Level</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-css3"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              {/* <span className="skills__level">Level</span> */}
            </div>
          </div>

          <div className="skills__data">
            <TbSql />
            <div>
              <h3 className="skills__name">SQL</h3>
              {/* <span className="skills__level">Level</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
