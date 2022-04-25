import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme";
import { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
       background: ${({ theme }) => theme.colors.background}
}
  `;
  const [theme, setTheme] = useState("light");

  const themeSwitchHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Header />
        <Main theme={theme} themeSwitchHandler={themeSwitchHandler} />
      </>
    </ThemeProvider>
  );
}

export default App;
