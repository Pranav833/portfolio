import React from "react";
import { SiPostgresql, SiMongodb,SiRedis } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const Databases = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Databases</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <SiMongodb />
            <div>
              <h3 className="skills__name">MongoDB</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiPostgresql />
            <div>
              <h3 className="skills__name">PostgreSQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <DiMysql />
            <div>
              <h3 className="skills__name">MySQL</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiRedis />
            <div>
              <h3 className="skills__name">Redis</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Databases;
