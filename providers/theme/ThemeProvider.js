import { Appearance } from "react-native";

import { darkTheme, lightTheme } from "../../colors";
import { useEffect, useState } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
      Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme
    );
  
    useEffect(() => {
      const listener = Appearance.addChangeListener(({ colorScheme }) => {
        setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
      });
  
      return () => listener.remove();
    }, []);
  
    return (
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    );
  };