import React from "react";

const JobInfo = ({ item }) => {
  return (
    <div className="job-info">
      <img className="job-image" src={item.logo} alt="logo" />
      <div className="job-details">
        <div className="job-domain">
          <p className="job-info-feature-1">{item.company}</p>
          {item.new ? <p className="job-info-feature-2">NEW</p> : ""}
          {item.featured ? <p className="job-info-feature-3">FEATURED</p> : ""}
        </div>
        <h2 className="job-position">{item.position}</h2>
        <ul className="job-lists">
          <li>{item.postedAt}</li>
          <li>{item.contract}</li>
          <li>{item.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default JobInfo;
