import React from "react";
import styled from "styled-components";

const TaskItem = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.75rem 1.25rem;
  color: inherit;
  background-color: transparent;
  border: 0;
  appearance: none;
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;

  &:hover {
    opacity: 0.75;
  }
`;

const TaskTitle = styled.h4`
  margin-top: 0;
  margin-bottom: ${props => (props.$hasDescription ? "0.5rem" : "0")};
`;

const TaskDescription = styled.p`
  margin-bottom: 0;
`;

// Render tasks as a list
export default function TasksList({ allTasks, handleDelete }) {
  return (
    <ul>
      {allTasks.map(({ title, description, id }) => (
        <TaskItem key={id}>
          <DeleteButton onClick={() => handleDelete(id)}>×</DeleteButton>
          <TaskTitle $hasDescription={!!description}>{title}</TaskTitle>
          {description && <TaskDescription>{description}</TaskDescription>}
        </TaskItem>
      ))}
    </ul>
  );
}
