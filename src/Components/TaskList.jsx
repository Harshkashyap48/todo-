import React from 'react';
import Task from './Tasks';
import './TaskList.css';

function TaskList({ tasks, deleteTask }) {
  return (
    <div className='TaskContainer'>
       <ul >
      {tasks.map(task => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </ul>
    </div>
   
  );
}

export default TaskList;