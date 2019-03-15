import React, {Component} from 'react'

class CreateStudent extends Component {
    constructor(){
        super()
        //sets the initial state via the constructor! that's the constructor's job :)
        this.state = {
        student: '',
        }
    }
    onInputChange = (e) => {
        this.setState({
        student: e.target.value
        })
    }
    onFormSubmit = (e) => {
    e.preventDefault()
    let student = this.state.student
    this.props.createStudent(student)
    this.setState({ student })
    console.log(student)
    }
    render(){ // first we set up the html
        return (
        <div >
            <form onSubmit={ this.onFormSubmit } id="taskForm">
            <input  
                onChange={ this.onInputChange } 
                value={ this.state.student }
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