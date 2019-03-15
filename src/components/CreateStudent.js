import React, {Component} from 'react'

class CreateStudent extends Component {


    render(){ // first we set up the html
        return (
        <div >
            <form onSubmit={ this.props.onFormSubmit } id="taskForm">
            <input  
                onChange={ this.props.onInputChange } 
                value={ this.props.student }
                placeholder="What's your name?" 
                type="text" 
                id="newItemDescription" 
            />
            <button 
            type="submit" 
            className="btn"
            id="addTask" >Add Student</button>
            </form>
        </div>
        )
    }
}

export default CreateStudent