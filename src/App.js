import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" data-test="appComponent">
    <h1 data-test="counterDisplay"  >
The counter is currently 
    </h1>
    <button data-test="incrementButton" >Increment Button</button>
    </div>
  );
}

export default App;
