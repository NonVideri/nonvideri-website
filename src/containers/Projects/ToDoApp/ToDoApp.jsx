import React, { useState } from "react";
import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";

export default function ToDoApp() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);
  // Handle input in a text field
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask(prev => ({
      ...prev,
      [name]: value,
      id: Date.now()
    }));
  };
  // Submit a task; doesn't let you submit an empty task
  const handleSubmit = event => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks(prev => [...prev, newTask]);
    setNewTask({});
  };
  // Delete task
  const handleDelete = taskIdToRemove => {
    setAllTasks(prev => prev.filter(task => task.id !== taskIdToRemove));
  };

  return (
    <main>
      <NewTask newTask={newTask} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  );
}
