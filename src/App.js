import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/About'
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
      <Router>
        <div className="App">
        <div className = 'container'> 
          <Header />
          <Route exact path = '/' render = { props => (
            <React.Fragment>
              <Todos todos = {this.state.todos} checked = {this.checked} delTodo = {this.delTodo}/>
              <AddTodo addTodoItem = {this.addTodoItem}/>
            </React.Fragment>
            )} />
            <Route path = '/About' component ={About}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
