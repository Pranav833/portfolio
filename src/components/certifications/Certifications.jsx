// Certification.jsx
import React from "react";
import "./certifications.css";
import certifications from "./Data";
import CertificationCard from "./CertificationCard";

const Certification = () => {
  return (
    <section className="certification container section" id="certifications">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle"></span>
      <div className="certification__container grid">
        {certifications.map(({  img, title, date, author },index) => (
          <CertificationCard
            key={index}
            img={img}
            title={title}
            date={date}
            author={author}
          />
        ))}
      </div>
    </section>
  );
};

export default Certification;
