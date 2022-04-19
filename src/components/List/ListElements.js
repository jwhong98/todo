import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 5px;

  form {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 1rem;

    input {
      width: 100%;
      outline: none;
      border: none;
      border-radius: inherit;
      padding: 0.75rem;
    }
  }
`;

export const TodoList = styled.div`
  background: #fff;
  border-radius: 5px;

  div:not(:last-child) {
    border-bottom: 1px solid hsl(236, 33%, 92%);
  }
`;

export const ListAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: hsl(236, 9%, 61%);
  margin-bottom: 1rem;

  p {
    font-size: 0.75rem;
  }

  button {
    color: inherit;
    background: inherit;
    outline: none;
    border: none;
    font-size: 0.8rem;
  }
`;

export const TodoTabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  gap: 1rem;
  padding: 1rem;
  border-radius: 5px;

  button {
    background: none;
    border: none;
    color: hsl(236, 9%, 61%);
    font-weight: 700;
    &:focus:active {
      color: hsl(235, 19%, 35%);
    }
  }
`;
