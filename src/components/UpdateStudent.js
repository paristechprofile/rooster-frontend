import React, { Component } from 'react';

class UpdateStudent extends Component {
    state = {
        student: this.props.student.body
    }
    onChange = (e) => {
        this.setState({
            student: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let student = this.state.student
        this.props.updateStudent(student);
        this.setState({ student: '' })
    }
    render() {
        return (
            <div className="updateStudentForm">
                <form onSubmit={ this.onSubmit }>
                    <input 
                        type='text'
                        onChange={ this.onChange }
                        placeholder="update this student here"
                        value={(this.state && this.state.student || '')}
                        />
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default UpdateStudent;
