import styled from "@emotion/styled";

export const TaskStyled = styled.li`
  width: 385px;
  height: 36px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 3px 0 9px 21px;
  background-color: inherit;
  border-bottom: 1px solid #ffd700;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Calibri Light", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PriorityStyled = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #ffd700;
  color: #000;

  text-align: center;
  font-family: Calibri;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const DeleteStyled = styled.button`
  background-color: inherit;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
