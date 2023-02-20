import React, { useContext } from 'react'
import TaskContext from '../Context/TaskContext'

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext)
  return ( 
        <div className='bg-gray-800 text-white p-4 rounded-xl'>
            <h1 className='text-l font-bold capitalize break-words'>{task.title}</h1>
            <p className='text-m text-gray-400 break-words'>{task.description}</p>
            <button className='bg-red-400 px-2 rounded-lg py-1 mt-4 hover:bg-red-300 shadow-2xl text-sm' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
        </div>  
  )
}

export default TaskCard