import React from "react";
import { ThemeSwitchContainer } from "./ThemeSwitcherElements";

const ThemeSwitcher = (props) => {
  return (
    <ThemeSwitchContainer>
      <h1>TODO</h1>
      <ion-icon name="moon-sharp" onClick={props.toggle}></ion-icon>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitcher;
