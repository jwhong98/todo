import React from "react";
import List from "../List/List";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { MainContainer } from "./MainElements";

const Main = (props) => {
  return (
    <MainContainer>
      <ThemeSwitcher
        currentTheme={props.theme}
        toggle={props.themeSwitchHandler}
      />
      <List />
    </MainContainer>
  );
};

export default Main;
