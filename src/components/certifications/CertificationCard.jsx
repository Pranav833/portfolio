import React, { useState } from "react";
import PropTypes from "prop-types";
import "./certifications.css";

const CertificationCard = ({ img, title, date, author }) => {
    const [toggleState, setToggleState] = useState(false); // Initialize to false for modal visibility

    const toggleTab = () => {
        setToggleState(!toggleState); // Toggle between true/false for modal visibility
    };

    const closeModal = () => {
        setToggleState(false); // Close the modal
    };

    return (
        <div className="certification__card">
            <div className="certification__thumb">
                <div onClick={toggleTab}>
                    <img src={img} alt={title} className="certification__img" />
                </div>
            </div>
            <div className="certification__details">
                <h3 className="certification__title">{title}</h3>
                <div className="certification__meta">
                    <span>{date}</span>
                    <span className="certification__dot">.</span>
                    <span>{author}</span>
                </div>
            </div>

            {/* Modal */}
            {toggleState && (
                <div className="certification__overlay" onClick={closeModal}>
                    <div className="certification__modal active-modal">
                        <div className="certification__modal-content">
                            {/* <i className="uil uil-times project__modal-close" onClick={toggleTab}></i> */}
                            <img src={img} alt={title} className="certification__content-img" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

CertificationCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default CertificationCard;
