import { useContext } from "react";
import TaskCard from "./TaskCard";
import TaskContext from "../Context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <>
      {tasks.length === 0 && <h1 className="text-white text-4xl text-center mt-8">No hay tareas</h1>}
      <div className="grid grid-cols-4 gap-2 p-4">
        {tasks.map((e, i) => {
          return <TaskCard key={i} task={e} />;
        })}
      </div>
    </>
  );
}

export default TaskList;
