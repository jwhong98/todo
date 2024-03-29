import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  border-radius: 5px;

  form {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;

    input {
      width: 100%;
      background: ${({ theme }) => theme.colors.listBackground};
      outline: none;
      border: none;
      border-radius: inherit;
      padding: 0.75rem;
    }
  }
`;

export const TodoList = styled.div`
  background: ${({ theme }) => theme.colors.listBackground};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const ListAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.listBackground};
  color: ${({ theme }) => theme.colors.action};
  margin-bottom: 1rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  p {
    font-size: 0.75rem;
  }

  button {
    color: inherit;
    background: inherit;
    outline: none;
    border: none;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

export const TodoTabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.listBackground};
  gap: 1rem;

  border-radius: 5px;

  button {
    background: none;
    padding: 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.button};
    font-weight: 700;
    cursor: pointer;
    :focus {
      color: hsl(220, 98%, 61%);
    }
  }
`;
