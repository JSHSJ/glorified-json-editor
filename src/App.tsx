import React from "react";
import logo from "./logo.svg";
import Parser from "./Parser/Parser";
import Renderer from "./Renderer/Renderer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Parser></Parser>
      <Renderer></Renderer>
    </div>
  );
};

export default App;
