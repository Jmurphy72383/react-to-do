import React, { Component } from 'react';

export class Todo extends Component {

    handleDelete = () => {
        this.props.deleteTodo(this.props.id)
    }


    render() {
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handleDelete}>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;
