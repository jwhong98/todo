import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 40vh;
  background-image: url(${({ theme }) => theme.headerBGM});
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 1024px) {
    background-image: url(${({ theme }) => theme.headerBGD});
  }
`;
