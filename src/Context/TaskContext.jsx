import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../Task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const taskCreate = (newTitle, newDescription) => {
    setTasks([
      ...tasks,
      {
        title: newTitle,
        description: newDescription,
        id: window.crypto.getRandomValues(new BigInt64Array(1))[0],
      },
    ]);
  };

  const deleteTask = (id) => {
    const newT = tasks.filter((task) => task.id !== id);
    setTasks(newT);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskCreate,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
