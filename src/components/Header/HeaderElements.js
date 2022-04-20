import styled from "styled-components";
import lightBGM from "../../images/bg-mobile-light.jpg";
import lightBGD from "../../images/bg-desktop-light.jpg";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 40vh;
  background-image: url(${lightBGM});
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 1024px) {
    background-image: url(${lightBGD});
  }
`;
