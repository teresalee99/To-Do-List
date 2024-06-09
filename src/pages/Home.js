import React, { Component } from 'react';
import AddTodo from '../component/AddTodo';
import Todos from '../component/todos';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    todo.id = Math.random(); // Create a unique ID
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };

  render() {
    return (
      <div className="Home">
        <h1>To-Do List</h1>
        <Todos todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
