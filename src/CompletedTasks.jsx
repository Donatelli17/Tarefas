import React from 'react';
import TaskList from './TaskList';

function CompletedTasks() {
  return <TaskList showCompleted={true} />;
}

export default CompletedTasks;
