import React from "react";
import JobInfo from "./JobInfo";
import JobSkills from "./JobSkills";

const JobCard = ({item}) => {
  return (
    <div className='job-card' >
      <JobInfo item={item}/>
      <JobSkills item={item}/>
    </div>
  );
};

export default JobCard;
