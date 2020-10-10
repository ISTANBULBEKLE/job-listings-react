import React from "react";
import "./App.css";
import Data from "./Data";
import Header from "./Component/Header";
import Main from "./Component/Main";

function App() {
  console.log(Data);

  return (
    <div className="App">
      <h1>Job Listing React Project </h1>
      <Header />
      <Main />
    </div>
  );
}

export default App;
