import React, { Component } from 'react';
import Todo from './Todo';

export class TodoList extends Component {

    state = {
        todos: [
            {task: "Walk The Dog"},
            {task: "Feed The Cat"}
        ]
    };


    render() {
        let items = this.state.todos.map(todo => <Todo task={todo.task}/>)
        return (
            <div>
                <h1>Todo List!</h1>
                <ul>
                    {items}
                </ul>
                
            </div>
        )
    }
}

export default TodoList;
