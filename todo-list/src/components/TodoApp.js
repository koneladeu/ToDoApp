import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTodo = (taskText) => {
    // Add the new task at the end of the list
    setTasks((prevTasks) => [...prevTasks, { text: taskText, completed: false }]);
  };

  const markCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const deleteTodo = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        tasks={tasks}
        markCompleted={markCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
