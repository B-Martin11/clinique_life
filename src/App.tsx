// src/App.tsx
import React from 'react';
import Accueil from './pages/Accueil';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
     <div className="min-h-screen bg-[#D2DEEA] pt-1">
  <Navbar />
  <Routes>
    <Route path="/" element={<Accueil />} />
  </Routes>
</div>
    </Router>
  );
};

export default App;
