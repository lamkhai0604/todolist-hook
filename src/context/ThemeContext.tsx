import { createContext, useState } from "react";

export const ThemeContext = createContext({});

//Store
const ThemeContextProvider = ({ children }: any) => {
  //state
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "rgb(240, 240, 240)",
      color: "black",
    },
    dark: {
      background: "rgb(39, 39, 39)",
      color: "white",
    },
  });

  //function toggle theme
  const toggleTheme = () => {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  };

  //Context data
  const themeContextData = {
    theme,
    toggleTheme,
  };

  //Return provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
