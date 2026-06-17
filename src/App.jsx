import React from 'react';
import Header from './Components/Header';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import FilterButtons from './Components/FilterButton';
import useLocalStorage from './Hooks/useLocalStorage';
import './App.css';

function App(){
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  }).filter(task => {
    return task.title.toLowerCase().includes(searchTerm.toLowerCase()); 
  });

  // create functionality
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, title: newTitle} : task
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <TaskForm onAddTask={addTask} />
      <FilterButtons
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggleComplete={toggleComplete}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;