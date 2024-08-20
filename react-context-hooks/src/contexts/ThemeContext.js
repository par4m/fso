import { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create the provider component
const ThemeContextProvider = ({ children }) => {
  // Define the state
  const [isLightTheme, setIsLightTheme] = useState(true);
  const light = { syntax: '#555', ui: '#ddd', bg: '#eee' };
  const dark = { syntax: '#ddd', ui: '#333', bg: '#555' };



  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme)
  }
  // Define the context value
  const value = {
    isLightTheme,
    light,
    dark,
    setIsLightTheme,
    toggleTheme
  };


  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

