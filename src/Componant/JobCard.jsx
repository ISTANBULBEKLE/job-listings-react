import React from "react";
import JobInfo from "./JobInfo";
import JobSkills from "./JobSkills";

const JobCard = () => {
  return (
    <div className='job-card' >
      <JobInfo />
      <JobSkills />
    </div>
  );
};

export default JobCard;
