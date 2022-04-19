import React from "react";
import Header from "../Header/Header";
import List from "../List/List";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { MainContainer } from "./MainElements";

const Main = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ThemeSwitcher />
        <List />
      </MainContainer>
    </>
  );
};

export default Main;
