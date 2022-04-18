import React from "react";
import Header from "../Header/Header";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { MainContainer } from "./MainElements";

const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ThemeSwitcher />
      </MainContainer>
    </>
  );
};

export default Main;
