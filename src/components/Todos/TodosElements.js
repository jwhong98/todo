import styled from "styled-components";

export const TodosContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.active};

  ion-icon {
    margin-left: auto;
    cursor: pointer;
  }

  ${({ complete }) =>
    complete &&
    `
    text-decoration: line-through;
    color: hsl(233, 11%, 84%);
  `}
`;
