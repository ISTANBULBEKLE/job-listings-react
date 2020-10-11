import React from "react";
import JobCard from "./JobCard";
import Data from "../Data.json";
import Search from "./Search";

const Main = () => {
  const jobList = Data;

  return (
    <div className="main-container">
      <Search />
      {jobList.map((card, index) => (
        <JobCard key={index} item={card} />
      ))}
    </div>
  );
};

export default Main;
