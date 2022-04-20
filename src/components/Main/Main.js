import React, { useState } from "react";

import Header from "../Header/Header";
import List from "../List/List";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { MainContainer, MainWrapper } from "./MainElements";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";

const Main = () => {
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
        <Header />
        <MainContainer>
          <MainWrapper>
            <ThemeSwitcher currentTheme={theme} toggle={themeSwitchHandler} />
            <List />
          </MainWrapper>
        </MainContainer>
      </>
    </ThemeProvider>
  );
};

export default Main;
