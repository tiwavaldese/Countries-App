import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MoonIcon from './components/MoonIcon';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Home';
import CountriesDetail from './components/CountriesDetail';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div className={`p-[2rem] w-full md-w-[60%] lg-w-[45%] font-poppins ${theme === 'light' ? 'bg-light-bg text-d-dark' : 'bg-d-dark text-c-white'}`}>
        <MoonIcon />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<CountriesDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;