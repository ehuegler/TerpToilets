import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Navbar/>
      <Routes>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
