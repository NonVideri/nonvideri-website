import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../../../components/Card";

const DisplayCard = styled(Card)`
  color: ${props => props.theme.colorBoxes};
  padding: 1rem;
  font-family: monospace;
  text-align: center;
`;

export default function ClockDisplay({ timezone, isPrecise }) {
  const [time, setTime] = useState(new Date());
  let intervalID;

  // Start clock
  const startInterval = () => {
    const oneSecond = 1000;
    const delay = isPrecise ? oneSecond / 10 : oneSecond;
    intervalID = setInterval(() => {
      setTime(new Date());
    }, delay);
  };

  // Clock starts when mounted
  useEffect(() => startInterval(), []);
  // Component reloads after mode change
  // Clear clock when unmounted to save resources
  useEffect(() => {
    clearInterval(intervalID);
    startInterval();
    return () => {
      clearInterval(intervalID);
    };
  }, [isPrecise, timezone]);
  // Render
  return (
    <DisplayCard>
      {isPrecise
        ? time.toISOString()
        : timezone === "local"
        ? time.toLocaleTimeString("en-US")
        : time.toLocaleTimeString("en-US", { timeZone: timezone })}
    </DisplayCard>
  );
}
