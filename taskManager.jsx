import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, text: 'Complete React.js project', completed: false },
        { id: 2, text: 'Write unit tests', completed: true },
        { id: 3, text: 'Review PRs', completed: false },
      ],
    };
  }

  addTask = (taskText) => {
    const newTask = {
      id: this.state.tasks.length + 1,
      text: taskText,
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggleTaskCompletion = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    });
  };

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
