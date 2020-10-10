import React from "react";
import backgroundImage from "../images/bg-header-desktop.svg";

const Header = () => {
  return (
    <div className="Header">
      <img className= 'header-image' src={backgroundImage} alt="main-header"></img>
    </div>
  );
};

export default Header;
