import "./Clock.css";
import React, { useState } from "react";
import styled from "styled-components";
import Display from "./components/Display";
import Timezone from "./components/Timezone";

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardGroup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ToggleButton = styled.button`
  padding: 0.375rem 0.75rem;
  background-color: #007bff;
  color: white;
  border: 1px solid #0056b3;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Clock() {
  const [state, setState] = useState({
    precise: false,
    timezone: "local"
  });

  // Change timezones
  const handleChange = newTimezone => {
    setState(state => ({ ...state, timezone: newTimezone }));
  };

  // Toggle precise mode
  const handleClick = () => {
    setState(state => ({ ...state, precise: !state.precise }));
  };
  return (
    <ClockWrapper>
      <CardGroup>
        <Display timezone={state.timezone} isPrecise={state.precise} />
        <Timezone setTimezone={handleChange} />
      </CardGroup>
      <ToggleButton onClick={handleClick}>Toggle Precise Mode</ToggleButton>
    </ClockWrapper>
  );
}
