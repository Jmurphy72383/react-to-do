import React, { Component } from 'react';
import './Todo.css';

export class Todo extends Component {

    state = {
        showEdit: false,
        task: this.props.task
    };

    handleDelete = () => {
        this.props.deleteTodo(this.props.id)
    }

    handleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    submitEdit = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({
            showEdit: false
        });
    }

    handleToggle = (e) => {
        this.props.toggleTodo(this.props.id);
    }


    render() {
        //Shows edit input if the edit todo button is clicked. Else, shows the todo list item
        let edit;
        if(this.state.showEdit) {
            edit = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.submitEdit}>
                        <input type="text" name='task' value={this.state.task} onChange={this.handleChange}></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            edit = (
                <div className="Todo">
                    
                    <li className={this.props.completed ? 'Todo-task completed' : "Todo-task"}
                        onClick={this.handleToggle}
                    >
                    {this.props.task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.handleEdit}><i className="fas fa-pen"/></button>
                        <button onClick={this.handleDelete}><i className="fa fa-trash"/></button>
                    </div>
                </div>
            )
        }
        return edit;
    }
}

export default Todo;
