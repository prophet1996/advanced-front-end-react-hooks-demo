import "../styles/globals.css";
import { createContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#e011ee",
  },
  dark: { foreground: "#e011ee", background: "#000000" },
};

export const ThemeContext = createContext(themes.light);

//this is a special file
// where the function that is exported from herr
// parent of all the next js pages function
//Level0
function MyApp({ Component, pageProps }) {
  const [themeVersion, setThemeVersion] = useState(false);
  return (
    <ThemeContext.Provider
      value={{
        values: themeVersion ? themes.light : themes.dark,
        changeTheme: () => setThemeVersion((themeVer) => !themeVer),
      }}
    >
      <Component {...pageProps}></Component>
    </ThemeContext.Provider>
  );
}

export default MyApp;
