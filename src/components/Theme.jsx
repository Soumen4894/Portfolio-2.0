import React, { useContext } from 'react'
import { themeContext } from "../context/Context"


const Theme = () => {
    const { theme, toggleTheme } = useContext(themeContext)
    return (
        <div>
            <button className='text-white' onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} Theme</button>
        </div>
    )
}

export default Theme