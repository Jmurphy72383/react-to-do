import React, { Component } from 'react';
import Todo from './Todo';
import NewToDo from './NewToDo';

export class TodoList extends Component {

    state = {
        todos: [
            {task: "Walk The Dog"},
            {task: "Feed The Cat"}
        ]
    };

    createTodoHandler = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }


    render() {
        let items = this.state.todos.map(todo => <Todo task={todo.task}/>)
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
