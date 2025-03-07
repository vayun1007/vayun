import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import TensorContributions from './pages/TensorContributions';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <MatrixBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/tensor" element={<TensorContributions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;