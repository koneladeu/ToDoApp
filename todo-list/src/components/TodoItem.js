import React from 'react';

const TodoItem = ({ task, index, markCompleted, deleteTodo }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.text}</span>
      <button onClick={() => markCompleted(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
