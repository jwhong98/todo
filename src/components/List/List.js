import React, { useState } from "react";
import Todos from "../Todos/Todos";
import { ListContainer, TodoList, ListAction, TodoTabs } from "./ListElements";

const List = () => {
  const [todo, setTodo] = useState([
    { id: 1, todo: "Jog around the park 3x", complete: false },
    { id: 2, todo: "10 minutes meditation", complete: false },
    { id: 3, todo: "Read for 1 hour", complete: false },
  ]);

  const clearHandler = () => {
    setTodo([]);
  };

  const removeHandler = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const completeHandler = () => {
    const filteredList = todo.filter((item) => item.complete);
    setTodo(filteredList);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let newTodo = {
        id: Math.random().toString(),
        todo: e.target.value,
        complete: false,
      };
      setTodo((prevArr) => [...prevArr, newTodo]);
      e.target.value = "";
    }
  };
  const createTodo = (data) => {
    return (
      <Todos
        key={data.id}
        id={data.id}
        todo={data.todo}
        complete={data.complete}
        removeHandler={removeHandler}
      />
    );
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
          <button onClick={clearHandler}>Clear Completed</button>
        </ListAction>
      </TodoList>
      <TodoTabs>
        <button>All</button>
        <button>Active</button>
        <button onClick={completeHandler}>Completed</button>
      </TodoTabs>
    </>
  );
};

export default List;
