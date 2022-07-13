import React, { Component } from "react";

const todoItems = [
  {
    id: 1,
    title: "Create Todo App",
    description: "Create an App with Todo's.",
    completed: false,
  },
  {
    id: 2,
    title: "Start using Django",
    description: "Start using Django and React",
    completed: true,
  },
  {
    id: 3,
    title: "Make a writing App",
    description: "Make an app to help track my writing",
    completed: false,
  },
  {
    id: 4,
    title: "Testing a Todo",
    description: "This is just a test",
    completed: false,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
          onClick={() => this.displayCompleted(true)}
        >
          Completed
        </span>
        <span
          className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
          onClick={() => this.displayCompleted(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed == viewCompleted
    );

    return newItems.map((item) => (
    <li
      key={item.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span
        className={`todo-title mr-2 ${
          this.state.viewCompleted ? "completed-todo" : ""
          } `}
        title={item.description}
      >
        {item.title}
      </span>
      <span>
        <button
          className="btn btn-secondary mr-2"  
        >
        Edit
        </button>
        <button
          className="btn btn-danger"  
        >
        Delete
        </button>  
      </span>
    </li>
  ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;