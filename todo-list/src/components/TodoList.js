import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, markCompleted, deleteTodo }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          task={task}
          markCompleted={markCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
