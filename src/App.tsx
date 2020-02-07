import React from 'react';
import Parser from './Parser/Parser';
import RendererForm from './Renderer/RendererForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Parser></Parser>
      <RendererForm></RendererForm>
    </div>
  );
};

export default App;
