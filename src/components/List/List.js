import React, { useState } from "react";
import Todos from "../Todos/Todos";
import { ListContainer, TodoList, ListAction, TodoTabs } from "./ListElements";

const List = () => {
  const [defaultList, setDefaultList] = useState([
    { id: 1, todo: "Jog around the park 3x", complete: false },
    { id: 2, todo: "10 minutes meditation", complete: false },
    { id: 3, todo: "Read for 1 hour", complete: false },
  ]);

  const [todo, setTodo] = useState(defaultList);

  const clearHandler = () => {
    const filteredList = todo.filter((item) => item.complete === false);
    setTodo(filteredList);
    setDefaultList(filteredList);
  };

  const removeHandler = (id) => {
    const filteredList = todo.filter((item) => item.id !== id);
    setTodo(filteredList);
    setDefaultList(filteredList);
  };

  const btnHandler = (e) => {
    if (e.target.value === "all") {
      setTodo(defaultList);
    } else if (e.target.value === "active") {
      setTodo(defaultList.filter((item) => item.complete === false));
    } else if (e.target.value === "completed") {
      setTodo(defaultList.filter((item) => item.complete));
    }
  };

  const updateStatus = (id) => {
    let todoIndex = defaultList.findIndex((todo) => todo.id === id);
    const item = defaultList[todoIndex];
    item.complete = !item.complete;
    defaultList[todoIndex] = item;
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
      setDefaultList((prevArr) => [...prevArr, newTodo]);
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
        updateHandler={updateStatus}
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
        <button onClick={btnHandler} value="all">
          All
        </button>
        <button onClick={btnHandler} value="active">
          Active
        </button>
        <button onClick={btnHandler} value="completed">
          Completed
        </button>
      </TodoTabs>
    </>
  );
};

export default List;
