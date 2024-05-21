import {createContext, useState} from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({children})=>{
    const [theme, useTheme] = useState('light')

    const toggleTheme=()=>{
useTheme ((prevTheme)=>(prevTheme === 'light'?'dark':'light'))
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
    
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;