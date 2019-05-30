import React, { Component } from 'react';

export class Todo extends Component {

    state = {
        showEdit: false
    };

    handleDelete = () => {
        this.props.deleteTodo(this.props.id)
    }

    handleEdit = () => {
        this.setState({
            showEdit: !this.state.showEdit
        });
    }


    render() {
        //Shows edit input if the edit todo button is clicked. Else, shows the todo list item
        let edit;
        if(this.state.showEdit) {
            edit = (
                <div>
                    <form>
                        <input type="text"></input>
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
