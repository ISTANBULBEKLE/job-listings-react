import React from "react";
import "./App.css";
import Data from "./Data";
import Header from "./Componant/Header";
import Main from "./Componant/Main";

function App() {
  console.log(Data);

  return (
    <div className="App">
      <h1>Job Listing </h1>
      <Header />
      <Main />
    </div>
  );
}

export default App;
