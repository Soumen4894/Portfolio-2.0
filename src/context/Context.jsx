import React, { createContext, useState } from 'react'
import "../app.css"

export const themeContext = createContext();

export const Context = (props) => {
  const [theme, setTheme] = useState('dark');
  document.body.className = theme;
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme);
    document.body.className = newTheme;
  }
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </themeContext.Provider>
  )
}