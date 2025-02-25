import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectForm, setForm } from "./formSlice";
import { selectModes, toggleMode } from "../modes/modesSlice";
import { submitItems } from "../results/resultsSlice";

const FormWrapper = styled.form`
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  color: ${props => props.theme.colorBoxes};
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Input = styled.input`
  display: ${props => (props.hidden ? "none" : "block")};
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media (min-width: 768px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })``;

const SubmitButton = styled.button`
  color: #fff;
  background-color: #198754;
  border-color: #198754;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  &:hover {
    background-color: #157347;
    border-color: #146c43;
  }
`;

export default function Form() {
  const userInput = useSelector(selectForm);
  const modes = useSelector(selectModes);
  const dispatch = useDispatch();

  const submitSound = new Audio("/sounds/items_randomized.mp3");

  // Enter items to be randomized
  const handleChange = e => {
    const fieldType = e.target.id;
    const userInput = e.target.value;
    dispatch(setForm({ [fieldType]: userInput }));
  };
  // Create a randomizable list
  const handleSubmit = e => {
    e.preventDefault();
    let num1, num2;

    dispatch(toggleMode("submitted"));
    if (modes.sound) {
      submitSound.play();
    }

    if (modes.numberRange) {
      num1 = parseInt(userInput.number1);
      num2 = parseInt(userInput.number2);
    }

    const itemList = !modes.numberRange
      ? userInput.custom.split(",").map(string => string.trim())
      : Array(Math.abs(num1 - num2) + 1)
          .fill()
          .map((_, i) => i + (num1 < num2 ? num1 : num2));

    dispatch(submitItems(itemList));
  };
  // Input form
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputGroup>
        <InputContainer>
          <Label>
            {modes.numberRange ? "Enter two integers (max 9999):" : 'Enter items separated by commas (","):'}
          </Label>
          <TextArea id="custom" hidden={modes.numberRange} placeholder="Enter items here" onChange={handleChange} />
          <Input
            id="number1"
            hidden={!modes.numberRange}
            type="number"
            placeholder="0"
            max="9999"
            onChange={handleChange}
          />
          <Input
            id="number2"
            hidden={!modes.numberRange}
            type="number"
            placeholder="0"
            max="9999"
            onChange={handleChange}
          />
        </InputContainer>
      </InputGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormWrapper>
  );
}
