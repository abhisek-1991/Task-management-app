import React, { useState } from 'react';

// TaskItem component to represent an individual task
const TaskItem = React.memo(({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
});

// TaskList component to display the list of tasks
const TaskList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

// TaskInput component to add new tasks
const TaskInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

// App component to tie everything together
const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const handleAddTask = (newTask) => {
    //console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskInput onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
