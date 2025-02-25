import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  min-height: 100px;
  resize: vertical;
`;

const Button = styled.button`
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:hover {
    color: #000;
    background-color: #31d2f2;
    border-color: #25cff2;
  }
`;

// A form to submit new task with description
export default function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="title" placeholder="New task" value={newTask.title || ""} onChange={handleChange} />
      {!newTask.title ? null : (
        <>
          <TextArea
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <Button type="submit">Add Task</Button>
        </>
      )}
    </Form>
  );
}
