import React from "react";

const courses = [
  "Operating System",
  "Computer Organisation",
  "Compiler Design",
  "Database Management",
  "Theory of Computation",
  "Data Structures",
  "Computer Networks",
  "Computer Security",
];

const Coursework = () => {
  return (
    <section className="coursework__box">
      <h2 className="coursework__title">Coursework</h2>
      <div className="coursework__list">
        {courses.map((course, index) => (
          <div className="coursework__item" key={index}>
            <i className='bx bxs-badge-check' style={{ padding: '0.5rem'}}></i>
            {course}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coursework;
