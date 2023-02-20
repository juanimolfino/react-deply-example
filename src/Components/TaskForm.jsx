import React, { useState, useContext } from "react";
import TaskContext from "../Context/TaskContext";

export default function TaskForm() {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const { taskCreate } = useContext(TaskContext);

  const handleInput = (e) => {
    setText(e.target.value);
  };
  const handleTextArea = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    taskCreate(text, description);
    setText("");
    setDescription("")
  };


  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
        <input maxLength={25} className="bg-slate-300 p-3 w-full mb-2 outline-none rounded-md" value={text} id="inputForm" type="text" placeholder="Escribe tu tarea" onChange={handleInput} autoFocus/>
        <textarea maxLength={40} className="bg-slate-300 p-3 w-full mb-2 outline-none rounded-md" value={description} id="textAreaForm" cols="10" rows="3" placeholder="Escribe una descripcion de tu tarea" onChange={handleTextArea}></textarea>
        <button className="bg-green-300 hover:bg-green-200 px-3 py-1 rounded-lg" type="submit">Add task</button>
      </form>
    </div>
  );
}
