import React from 'react';
import TaskList from './TaskList';

function ActiveTasks() {
  return <TaskList showCompleted={false} />;
}

export default ActiveTasks;
