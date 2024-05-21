import React from 'react'
import './App.css';
import MoonIcon from './components/MoonIcon'
import SearchInput from './components/SearchInput'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext';
import Flags from './components/Flags';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`p-[2rem] w-full md-w-[60%] lg-w-[45%] font-poppins ${theme === 'light' ? 'bg-light-bg text-d-dark' : 'bg-d-dark text-c-white'} `}>     
      <MoonIcon/>
      <SearchInput />
      <Flags />    
    </div>
  )
}

export default App
