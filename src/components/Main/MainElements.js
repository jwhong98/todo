import styled from "styled-components";

export const MainContainer = styled.main`
  /* temporary */
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  padding: 2.75rem 1.25rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 20;

  @media screen and (min-width: 1024px) {
    padding-top: 5rem;
  }
`;
