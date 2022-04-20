import React, { useState } from "react";
import Header from "../Header/Header";
import List from "../List/List";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { MainContainer, MainWrapper } from "./MainElements";
import { ThemeProvider } from "styled-components";

const Main = () => {
  const light = {
    headerBGM: "url('../../images/bg-mobile-light.jpg')",
    headerBGD: "../../images/bg-desktop-light.jpg",
    colors: {
      listBackground: "#fff",
      background: "hsl(0, 0%, 98%)",
      active: "hsl(235, 19%, 35%)",
      complete: "hsl(233, 11%, 84%)",
      body: "hsl(0, 0%, 98%)",
    },
  };

  const dark = {
    colors: {
      listBackground: "hsl(235, 24%, 19%)",
      background: "hsl(235, 21%, 11%)",
      active: "hsl(234, 39%, 85%)",
    },
  };

  const [theme, setTheme] = useState(light);

  const themeSwitchHandler = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <MainContainer>
          <MainWrapper>
            <ThemeSwitcher toggle={themeSwitchHandler} />
            <List />
          </MainWrapper>
        </MainContainer>
      </>
    </ThemeProvider>
  );
};

export default Main;
