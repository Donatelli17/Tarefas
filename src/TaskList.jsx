import React from 'react';

function TaskList({ tasks, showCompleted }) {
  const filteredTasks = showCompleted ? tasks.filter((task) => task.completed) : tasks;

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} readOnly />
          {task.name}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;