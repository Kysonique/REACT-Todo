import React from "react";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoInput from "./components/TodoInput";

class App extends React.Component {
  //todo app structure {status, description, title, id}
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "test title",
          description: "another test descripion",
          status: "PENDING"
        }
      ],
      currentlyEditingTodo: null
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(todoObject) {
    debugger;
    const newTodos = JSON.parse(JSON.stringify(this.state.todos));
    newTodos.push(todoObject);
    return this.setState({
      todos: newTodos
    });
  }

  editTodo(editByID) {
    // to directly modify the description and status
    //const updateID = (id.description, id.status);
    this.setState({
      ...todos,
        id: editByID.id,
          title: editByID.target.value,
          description: editByID.target.value,
          status: editByID.target.value
    });
    //const updateTodo =
  }

  deleteTodo(deleteID) {
    // delete todo container by id
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== deleteID.id)
    });
    // const deleteID = this.state.todos.filter((item) => item.id !== id);
    // return this.setState(deleteID);
  }

  //loking for an actual todo
  handleEditCallBack = (todo) => this.setState({ currentlyEditingTodo: todo });

  render() {
    return (
      <div>
        <TodoInput
          todo={this.state.currentlyEditingTodo}
          todoAmount={this.state.todos.length}
          handleSaveClick={this.addTodo}
          buttonText={this.state.currentlyEditingTodo ? "Edit" : "Add"}
        />
        <TodoContainer
          todos={this.state.todos}
          handleEdit={this.editTodo}
          handleDelete={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
