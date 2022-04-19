import styled from "styled-components";

export const TodosContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  color: hsl(235, 19%, 35%);

  ion-icon {
    margin-left: auto;
  }

  ${({ complete }) =>
    complete &&
    `
    text-decoration: line-through;
    color: hsl(233, 11%, 84%);
  `}
`;
