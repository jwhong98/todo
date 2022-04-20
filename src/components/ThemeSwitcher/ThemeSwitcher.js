import React from "react";
import { ThemeSwitchContainer } from "./ThemeSwitcherElements";

const ThemeSwitcher = (props) => {
  return (
    <ThemeSwitchContainer>
      <h1>TODO</h1>
      {props.currentTheme === "light" ? (
        <ion-icon name="moon-sharp" onClick={props.toggle}></ion-icon>
      ) : (
        <ion-icon name="sunny" onClick={props.toggle}></ion-icon>
      )}
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitcher;
