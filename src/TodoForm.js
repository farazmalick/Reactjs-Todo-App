import React, { Component } from "react";
import uuid from "uuid/v4";

class TodoForm extends Component {
  constructor(props) {
    super();
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button>Add Item</button>
      </form>
    );
  }
}
export default TodoForm;
