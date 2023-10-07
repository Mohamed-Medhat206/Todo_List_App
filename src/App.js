import Additems from './components/AddItems'
import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems'
class App extends Component {
  state = {
    items: [
      { id: 10, name: "Ahmed", age: 24 },
      { id: 11, name: "Mohamed", age: 21 },
      { id: 12, name: "Omar", age: 16 },
    ]
  }

  handelDelete=(id)=>{
    let items = this.state.items.filter(item=>{
      return item.id !== id
    })
    this.setState({items})
  }

  additem=(item)=>{
    item.id = Math.random()*10;
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render() {
    return (
      <div className='App container'>
        <h1 className='text-center'>Todo List</h1>
        <TodoItems items={this.state.items} delet={this.handelDelete}/>
        <Additems additem = {this.additem}/>
      </div>
    )
  }
}


export default App;
