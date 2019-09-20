import React from 'react';
import './App.css';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Wizard from './Components/Wizard'

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Wizard/>
    </div>
  );
}

export default App;
