import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar';
import Visualization from './components/Visualization';
import EndSection from './components/EndSection';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path='/main' element={<Visualization information={1} />} />
        </Routes>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <EndSection />
      </div>
    </Router>
  );
}

export default App;
