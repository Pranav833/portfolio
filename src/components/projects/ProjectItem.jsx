import React, { useState } from "react";

const ProjectItem = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="work__card">
      <img
        src={item.image}
        alt={`${item.title} screenshot`}
        className="work__img"
      />
      <h3 className="work__title">{item.title}</h3>
      <div className="view__div">      <span className="work__button" onClick={() => toggleTab(2)}>
        View More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span></div>


      <div
        className={
          toggleState === 2 ? "project__modal active-modal" : "project__modal"
        }
      >
        <div className="project__modal-content">
          <i
            className="uil uil-times project__modal-close"
            onClick={() => toggleTab(0)}
          ></i>
          <h3 className="project__modal-title">{item.title}</h3>
          <div className="project__modal-description">
            <div className="project__techstack">
              {item.icons.map((Icon, index) => (
                <span className="tech__icon" key={index}>
                  <Icon />
                </span>
              ))}
            </div>
            <p>{item.description}</p>
          </div>

          <ul className="project__modal-services grid">
            {item.points.map((point, index) => (
              <li className="project__modal-service" key={index}>
                <i className="uil uil-check-circle project__modal-icon"></i>
                <p className="project__modal-info">{point}</p>
              </li>
            ))}
          </ul>
          <div className="project__links">
            {item.links.map((linkItem, index) => (
              <a href={linkItem.linkAdd} target="_blank" rel="noreferrer" className="button button--flex link__button" key={index}>
                <linkItem.icon/>{linkItem.buttonName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
