import React, { useState } from "react";
import Todos from "../Todos/Todos";
import { ListContainer, TodoList, ListAction } from "./ListElements";

const List = () => {
  const [todo, setTodo] = useState([
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
  ]);

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodo((prevArr) => [...prevArr, e.target.value]);
      e.target.value = "";
    }
  };
  const createTodo = (data) => {
    return <Todos todo={data} />;
  };
  return (
    <>
      <ListContainer>
        <form action="get">
          <input
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={keyDownHandler}
          />
        </form>
      </ListContainer>
      <TodoList>
        {todo.map(createTodo)}
        <ListAction>
          <p>{todo.length} items left</p>
          <button>Clear Completed</button>
        </ListAction>
      </TodoList>
    </>
  );
};

export default List;
