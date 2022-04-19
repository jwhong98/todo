import React, { useState } from "react";
import { TodosContainer } from "./TodosElements";

const Todos = (props) => {
  const [complete, setComplete] = useState(false);

  const onClickHandler = () => {
    setComplete(!complete);
    console.log(complete);
  };
  return (
    <TodosContainer complete={complete}>
      <input type="checkbox" name="" id="" onClick={onClickHandler} />
      <p>{props.todo}</p>
      <ion-icon name="close-outline"></ion-icon>
    </TodosContainer>
  );
};

export default Todos;
