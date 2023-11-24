import React from "react";
import { useDispatch } from "react-redux";
import { removeToDo } from "store/ToDoSlice";
import { TaskStyled, PriorityStyled, DeleteStyled } from "./ToDoItem.styled";
import { ReactComponent as Cross } from "../../assets/icons/gridicons_cross-small.svg";

export const ToDoItem = ({ id, text, priority }) => {
  const dispatch = useDispatch();

  return (
    <TaskStyled>
      <PriorityStyled>{priority}</PriorityStyled>
      <span>{text}</span>
      <DeleteStyled onClick={() => dispatch(removeToDo({ id }))}>
        <Cross />
      </DeleteStyled>
    </TaskStyled>
  );
};
