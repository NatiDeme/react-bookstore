import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
