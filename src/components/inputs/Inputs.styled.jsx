import styled from "@emotion/styled";

export const LableStyled = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 385px;
  gap: 14px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const TextStyled = styled.input`
  width: 192px;
  height: 35px;
  border: none;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.6);
  color: rgba(33, 33, 33, 0.7);
  font-family: Montserrat;
  font-size: 18.22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const NumberStyled = styled.input`
  width: 64px;
  height: 35px;
  border: none;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.6);
  color: rgba(33, 33, 33, 0.7);

  text-align: center;
  font-family: Montserrat;
  font-size: 18.22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const AddButton = styled.button`
  width: 101px;
  height: 35px;
  border-radius: 5px;
  background-color: inherit;
  border: 2px solid #ffd700;
  text-align: center;
  color: #ffd700;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
