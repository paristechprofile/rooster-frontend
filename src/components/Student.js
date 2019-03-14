import React, {Component} from 'react'
// import UpdateStudentForm from './UpdateStudentForm'

class Student extends Component {
    deleteClickedStudent = () =>{
        this.props.deleteStudent(this.props.student);
    }
    
    render(){
        return (
            <li data-students-index={ this.props.student.id }>
                <div>
                <span> { this.props.student.body } </span>
                <a 
                href='#removestudent'
                className="remove"
                onClick={ this.deleteClickedStudent }>
                Remove
                </a>
                </div>
                <UpdateStudentForm
                student={this.props.student}
                buttonName='Update Student!'
                updateStudent={ this.props.updateStudent}/>
            </li>
        )
    }
}

export default Student