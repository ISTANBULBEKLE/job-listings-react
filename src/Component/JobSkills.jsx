import React from "react";

const JobSkills = ({ item }) => {
  return (
    <div className="job-skills">
      {item.languages.map((lan) => (
        <button className="job-btn">{lan}</button>
      ))}
    </div>
  );
};

export default JobSkills;
