import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToDoItem } from "components/toDoItem/ToDoItem";
import { ListStyled } from "./ToDoList.styled";

export const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ListStyled>
      {todos && todos.map((todo) => <ToDoItem key={todo.id} {...todo} />)}
    </ListStyled>
  );
};
