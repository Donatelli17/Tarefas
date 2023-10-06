import React, { useState, useEffect } from 'react';

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [currentPage, setCurrentPage] = useState('active');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), name: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks =
    currentPage === 'active'
      ? tasks.filter((task) => !task.completed)
      : tasks.filter((task) => task.completed);

  return (
    <div>
      <h1>Tarefas</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskInput}
          onChange={(event) => setTaskInput(event.target.value)}
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <button onClick={() => setCurrentPage('active')}>Tarefas Ativas</button>
      <button onClick={() => setCurrentPage('completed')}>Tarefas Concluídas</button>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            {task.name}
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskApp;