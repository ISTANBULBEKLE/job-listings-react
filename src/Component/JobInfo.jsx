import React from "react";
import Logo from "../images/faceit.svg";

const JobInfo = () => {
  return (
    <div className="job-info">
      <img className="job-image" src={Logo} alt="logo" />
      <div className="job-details">
        <div className="job-domain">
          <p>Photo-snap</p>
          <p>New</p>
          <p>Feature</p>
        </div>
        <h2 className="job-position">Senior Frontend Developer</h2>
        <ul className="job-lists">
          <li>Id Go</li>
          <li>Full Title</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  );
};

export default JobInfo;
