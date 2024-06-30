import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiVisualstudiocode, SiFirebase, SiKubernetes } from "react-icons/si";
import { FaLinux, FaDocker, FaJenkins } from "react-icons/fa";

const DevToolsAndEnv = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Dev Tools and Environments</h3>

      <div className="skills__box">
        <div className="skills__group">
          
          <div className="skills__data">
            <SiVisualstudiocode />
            <div>
              <h3 className="skills__name">VS Code</h3>
            </div>
          </div>

          <div className="skills__data">
            <FontAwesomeIcon icon={faGithub} />
            <div>
              <h3 className="skills__name">GitHub</h3>
            </div>
          </div>

          <div className="skills__data">
            <FaLinux />
            <div>
              <h3 className="skills__name">Linux</h3>
            </div>
          </div>

          <div className="skills__data">
            <SiFirebase />
            <div>
              <h3 className="skills__name">Firebase</h3>
            </div>
          </div>

          <div className="skills__data">
            <FaDocker />
            <div>
              <h3 className="skills__name">Docker</h3>
            </div>
          </div>

          <div className="skills__data">
          <SiKubernetes/>
            <div>
              <h3 className="skills__name">Kubernetes</h3>
            </div>
          </div>

          <div className="skills__data">
            <FaJenkins />
            <div>
              <h3 className="skills__name">Jenkins</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DevToolsAndEnv;
