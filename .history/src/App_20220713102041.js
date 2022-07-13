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
      
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
