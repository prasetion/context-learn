import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLigthTheme, setIsLigthTheme] = useState(true);
  const handleLightTheme = () => {
    setIsLigthTheme(!isLigthTheme);
  };
  return (
    <ThemeContext.Provider value={{ isLigthTheme, handleLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
