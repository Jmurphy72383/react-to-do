import React, { Component } from 'react';
import Todo from './Todo';
import NewToDo from './NewToDo';

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


    render() {
        let items = this.state.todos.map(todo => 
        <Todo 
            key={todo.id} 
            id={todo.id} 
            task={todo.task} 
            deleteTodo={this.removeTodoHandler}
            updateTodo={this.updateTodo}
            />)
        return (
            <div>
                <h1>Todo List!</h1>
                <NewToDo createTodo={this.createTodoHandler}/>
                <ul>
                    {items}
                </ul>
                
            </div>
        )
    }
}

export default TodoList;
