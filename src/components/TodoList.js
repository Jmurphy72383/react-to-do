import React, { Component } from 'react';
import Todo from './Todo';
import NewToDo from './NewToDo';
import './TodoList.css';

export class TodoList extends Component {

    state = {
        todos: []
    };

    createTodoHandler = newTodo => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    removeTodoHandler = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    updateTodo = (id, updatedTodo) => {
        const updatedItem = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, task: updatedTodo };
            }
            return todo;
        });
        this.setState({
            todos: updatedItem
        });
    }

    toggleCompletion = (id) => {
        const updatedItem = this.state.todos.map(todo => {
            if(todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({
            todos: updatedItem
        });
    }


    render() {
        let items = this.state.todos.map(todo => 
        <Todo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task}
            completed={todo.completed} 
            deleteTodo={this.removeTodoHandler}
            updateTodo={this.updateTodo}
            toggleTodo={this.toggleCompletion}
            />)
        return (
            <div className="TodoList">
                <h1>Todo List <span>Built With React</span></h1>
                
                <ul>
                    {items}
                </ul>

                <NewToDo createTodo={this.createTodoHandler}/>
                
            </div>
        )
    }
}

export default TodoList;
