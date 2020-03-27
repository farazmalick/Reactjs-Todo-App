import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super();
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  create(newtodo) {
    this.setState({ todos: [...this.state.todos, newtodo] });
  }
  remove(id) {
    this.setState({ todos: this.state.todos.filter(t => t.id !== id) });
  }

  update(id, uTask) {
    const UpdatedTodo = this.state.todos.map(t => {
      if (t.id === id) {
        return { ...t, task: uTask };
      }
      return t;
    });
    this.setState({ todos: UpdatedTodo });
  }
  toggleComplete(id) {
    const UpdatedTodo = this.state.todos.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    this.setState({ todos: UpdatedTodo });
  }

  render() {
    let todo = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          id={todo.id}
          updateTodo={this.update}
          completed={todo.completed}
          toggleCompletion={this.toggleComplete}
        />
      );
    });
    return (
      <div>
        <h1>Todo List</h1>
        <ul className="list">{todo}</ul>
        <TodoForm createTodo={this.create} />
      </div>
    );
  }
}
export default TodoList;
