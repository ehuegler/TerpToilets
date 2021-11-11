import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
