import React, { useState } from "react";

const Search = ({getLanguages}) => {
  const languageArray = [
    "HTML",
    "Frontend",
    "JvaScript",
    "Fullstack",
    "React",
    "Ruby",
    "Backend",
    "Junior",
    "Vue",
    "SaaS",
  ];

  const [languages, setLanguages] = useState(languageArray);



  function handleCloseBtn(e) {
    const itemToBeRemoved = e.currentTarget.previousSibling.innerHTML;
    let newList = languages.filter((lan) => itemToBeRemoved !== lan);
    setLanguages(newList);
  }

    getLanguages(languages);
    
  return (
    <div className="search">
      {languages.map((language) => {
        return (
          <div className="filter-btn">
            <span className="job-btn">{language}</span>
            <span onClick={handleCloseBtn} className="job-btn close-btn">
              X
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
