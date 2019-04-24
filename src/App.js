import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        complete: false
      },
      {
        id: uuid.v4(),
        title: 'Make dinner',
        complete: true
      },
      {
        id: uuid.v4(),
        title: 'Practice React',
        complete: false
      }
    ]
  }

  checked = (id) => {
    this.setState( {todos: this.state.todos.map( todo => {
          if(todo.id === id) {
            todo.complete = !todo.complete;
          }
          return todo;
        }
      )
    })
  }

  addTodoItem = (title) => {
    const newTodo ={ 
      id: uuid.v4(),
      title,
      complete: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
    console.log(this.state)
  }

  delTodo = (id) => {
    this.setState( {todos: [...this.state.todos.filter( todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <div className = 'container'> 
          <Header />
          <Todos todos = {this.state.todos} checked = {this.checked} delTodo = {this.delTodo}/>
          <AddTodo addTodoItem = {this.addTodoItem}/>
        </div>
      </div>
    );
  }
}

export default App;
