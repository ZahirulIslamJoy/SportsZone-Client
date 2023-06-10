import React, { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeProviders = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  const shareFunc = {
    theme,
    toggleTheme,
  };
  return (
    <div>
      <ThemeContext.Provider value={shareFunc}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default ThemeProviders;
