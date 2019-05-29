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

    render() {
        return (
            <div>
                <form>
                    <label htmlFor='task'>New Todo</label>
                    <input 
                        type='text' 
                        placeholder='New Todo' 
                        id='task' 
                        value='this.state.task'
                        onChange={this.handleChange}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default NewToDo;
