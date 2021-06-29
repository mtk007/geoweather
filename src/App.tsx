import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather'
import Location from './Location'

function App() {
  return (
    <div className="App">
      <Weather />
     <Location />
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;


{/* 
<p>
Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}