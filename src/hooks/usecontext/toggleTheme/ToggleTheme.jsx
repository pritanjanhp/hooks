import React, { createContext, useContext, useState } from 'react'
import ThemeContext from './ThemeContext';
import Form from './Form';
import Button from './Button';

const ToggleTheme = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>

      <Button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}>
        Toggle Theme
      </Button>
    </>
  )
}

export default ToggleTheme

