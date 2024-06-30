import React from "react";
import {
  SiFlutter,
  SiPandas,
  SiTensorflow,
  SiNumpy,
  SiDjango,
  SiFlask,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

const FrameWorksAndLib = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frameworks & Libraries</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <SiDjango />
            <div>
              <h3 className="skills__name">Django</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiFlutter />
            <div>
              <h3 className="skills__name">Flutter</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiFlask />
            <div>
              <h3 className="skills__name">Flask</h3>
            </div>
          </div>

          <div className="skills__data">
            <FaNodeJs />
            <div>
              <h3 className="skills__name">Node.js</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiPandas />
            <div>
              <h3 className="skills__name">Pandas</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiNumpy />
            <div>
              <h3 className="skills__name">NumPy</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiTensorflow />
            <div>
              <h3 className="skills__name">TensorFlow</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameWorksAndLib;
