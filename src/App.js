import React from 'react';
import Todos from "./TodoList/todolist.js";
import Form from "./Form/form";
import { connect } from 'react-redux';
import { deleteTodo, addTodo} from './Actions/index.js';



class App extends React.Component {

    
    deleteTodo = (id) => {
        this.props.deleteTodo(id);
    }

    addTodo = (todo) => {
        this.props.addTodo(todo);
    };   

    render() {
        return (
        <div className = "p-3 mb-2 bg-warning text-dark "><h1 className="text-center">To-Do List</h1></div>,
            <div className="App">
            <Todos todos = {this.props.todos_list} deleteTodo = {this.deleteTodo} />
            < Form addTodo = {this.props.addTodo}/>
        </div>
        );
    }
}


const mapStateToProps = state =>{
  return {
    todos_list:state
  }
} 

const mapDispatchToProps = {
  deleteTodo,
  addTodo
};


export default connect(mapStateToProps, mapDispatchToProps)(App);