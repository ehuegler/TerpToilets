import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import LandingPage from './Components/LandingPage/LandingPage';
import RatingsPage from './Components/RatingsPage/RatingsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ratings" element={<RatingsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
