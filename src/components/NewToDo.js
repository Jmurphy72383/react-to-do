import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewToDo.css';

export class NewToDo extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         task: ""
    //     }
    // }
    state = {
        task: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task: ''
        });
    }

    render() {
        return (
            <div>
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>New Todo</label>
                    <input 
                        type='text' 
                        name='task'
                        placeholder='New Todo' 
                        id='task' 
                        value={this.state.task}
                        onChange={this.handleChange}
                    >
                    </input>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewToDo;
