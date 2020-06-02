import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>List</h1>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;
