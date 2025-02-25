import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { selectResults, pickItem, resetItems } from "./resultsSlice";
import { selectModes, toggleMode } from "../modes/modesSlice";
import Card from "../../../../../components/Card";

const PrimaryButton = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  margin-right: 0.5rem;

  &:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;

const DangerButton = styled(PrimaryButton)`
  background-color: #dc3545;
  border-color: #dc3545;

  &:hover {
    background-color: #bb2d3b;
    border-color: #b02a37;
  }
`;

const Counter = styled.div`
  margin: 1rem 0;
`;

const CardHeader = styled.p`
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const CardBody = styled.p`
  padding: 1rem;
  margin-bottom: 0;
`;

export default function Results() {
  const modes = useSelector(selectModes);
  const items = useSelector(selectResults);
  const dispatch = useDispatch();
  const itemSound = new Audio("/sounds/item.wav");

  // Get a random item
  const getItem = () => {
    let array = items.list;
    let random = Math.floor(Math.random() * items.list.length);
    let item = array[random];
    if (!modes.repeat) {
      if (items.counter + 1 === items.max) {
        dispatch(resetItems());
        dispatch(toggleMode("submitted"));
      } else {
        dispatch(pickItem(random));
      }
    }
    if (modes.sound) {
      itemSound.play();
    }
    alert(item);
  };

  return (
    <>
      <PrimaryButton onClick={getItem}>Get Random {modes.numberRange ? "Number" : "Item"}</PrimaryButton>
      <DangerButton onClick={() => dispatch(toggleMode("submitted"))}>Exit</DangerButton>
      <Counter hidden={modes.repeat}>
        <strong>Counter:</strong> {items.counter} out of {items.max}
      </Counter>
      <Card hidden={modes.hidden}>
        <CardHeader>
          <i>Items left:</i>
        </CardHeader>
        <CardBody>{items.list.map(i => i + " ")}</CardBody>
      </Card>
    </>
  );
}
