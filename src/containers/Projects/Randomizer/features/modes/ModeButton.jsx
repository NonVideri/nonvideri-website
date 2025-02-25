import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectModes, toggleMode } from "./modesSlice";

const Button = styled.button`
  color: ${props => props.theme.colorBoxes};
  background-color: #f8f9fa;
  border-color: #f8f9fa;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;

  &:hover {
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
`;

export default function ModeButton({ mode, modeName, modeYes, modeNo }) {
  const modes = useSelector(selectModes);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(toggleMode(mode))}>
      {modeName}: {modes[mode] ? modeYes : modeNo}
    </Button>
  );
}
