import React from 'react';

function Task({ task, deleteTask }) {
  return (
    <li >
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;