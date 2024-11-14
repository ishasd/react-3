import React from 'react';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
