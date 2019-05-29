import React, { Component } from 'react';

export class NewToDo extends Component {

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

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
