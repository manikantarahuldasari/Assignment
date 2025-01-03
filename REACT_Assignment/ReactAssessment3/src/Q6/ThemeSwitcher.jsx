import React from 'react'
import  { useState } from 'react';

   
   

    const ThemeSwitcher = () => {
      const [isDarkMode, setIsDarkMode] = useState(false);
    
      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };
    
      const themeStyles = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? '#fff' : '#000',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      };
    
      return (
        <div style={themeStyles}>
      <p>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={toggleTheme} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher