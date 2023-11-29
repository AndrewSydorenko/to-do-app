import React from "react";
import {
  TextStyled,
  NumberStyled,
  LableStyled,
  AddButton,
} from "./Inputs.styled";

export const Inputs = ({
  text,
  priority,
  handleInput,
  handleSubmit,
  handlePriority,
}) => {
  return (
    <LableStyled>
      <TextStyled
        type="text"
        placeholder="Title..."
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      ></TextStyled>
      <NumberStyled
        type="number"
        placeholder="14"
        min="1"
        max="999"
        value={priority}
        onChange={(e) => handlePriority(e.target.value)}
      ></NumberStyled>
      <AddButton onClick={handleSubmit}>Add</AddButton>
    </LableStyled>
  );
};
