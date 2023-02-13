import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import Omnie from './components/Omnie/Omnie';
import './index.css';

function App() {
  return (
    <div className="App bg-gradient-to-r from-purple-200 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/o-mnie" element={<Omnie />} />
        <Route path="/blog/:slug_postu" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
