import React, { useState } from "react";
import { TodosContainer } from "./TodosElements";

const Todos = (props) => {
  const [complete, setComplete] = useState(props.complete);

  const onClickHandler = (e) => {
    setComplete(!complete);
    e.target.complete = complete;
    console.log(e.target.complete);
  };

  const remove = () => {
    props.removeHandler(props.id);
  };
  return (
    <TodosContainer complete={complete}>
      <input type="checkbox" name="" id="" onClick={onClickHandler} />
      <p>{props.todo}</p>
      <ion-icon name="close-outline" onClick={remove}></ion-icon>
    </TodosContainer>
  );
};

export default Todos;
