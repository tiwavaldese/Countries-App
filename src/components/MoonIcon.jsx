import React from 'react'
import { IoMoonOutline, IoMoonSharp} from "react-icons/io5"
import { CiLight } from "react-icons/ci"
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const MoonIcon = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div onClick={toggleTheme}>
        {
            theme === 'light' ?
            <span className='flex items-center space-x-2 gap-2 ' ><IoMoonOutline/><span>Dark Mode</span></span>
            
            :
            
            <span className='flex items-center space-x-2 gap-2 text-c-white'><IoMoonSharp/><span>Dark Mode</span></span>
        }
      
      
      </div>
  )
}

export default MoonIcon
