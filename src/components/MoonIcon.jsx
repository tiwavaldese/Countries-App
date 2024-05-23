import React from 'react'
import { IoMoonOutline, IoMoonSharp} from "react-icons/io5"
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const MoonIcon = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div className={`h-12 p-7 ${theme === 'light' ? 'bg-c-white' : 'bg-m-dark'} shadow-lg shadow-opacity-70 flex items-center gap-1 justify-between`} >
        <div >Where in the world ?</div>
    <div onClick={toggleTheme}>
        {
            theme === 'light' ?
            <span className='flex items-center space-x-2 gap-2 ' ><IoMoonOutline/><span>Dark Mode</span></span>
            
            :
            
            <span className='flex items-center space-x-2 gap-2 text-c-white'><IoMoonSharp/><span>Dark Mode</span></span>
        }
      </div>
      </div>
  )
}

export default MoonIcon
