import React from "react";
import "./App.css";
import Data from "./Data";
import Header from "./Component/Header";
import Main from "./Component/Main";

function App() {
  console.log(Data);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
