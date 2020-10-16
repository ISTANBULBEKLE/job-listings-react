import React, {useState} from "react";
import JobCard from "./JobCard";
import Data from "../Data.json";
import Search from "./Search";

const Main = () => {
  const jobList = Data;

  const [listOfJobs, setListOfJobs]= useState(Data);

  function getLanguages (lang){
    return lang;
  }

  return (
    <div className="main-container">
      <Search  getLanguages={getLanguages}/>
      {jobList.map((card, index) => (
        <JobCard key={index} item={card} />
      ))}
    </div>
  );
};

export default Main;
