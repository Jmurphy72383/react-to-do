import React, { Component } from 'react';

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


    render() {
        //Shows edit input if the edit todo button is clicked. Else, shows the todo list item
        let edit;
        if(this.state.showEdit) {
            edit = (
                <div>
                    <form onSubmit={this.submitEdit}>
                        <input type="text" name='task' value={this.state.task} onChange={this.handleChange}></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            edit = (
                <div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleDelete}>X</button>
                    <li>{this.props.task}</li>
                </div>
            )
        }
        return edit;
    }
}

export default Todo;
