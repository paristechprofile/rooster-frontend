import React, {Component} from 'react'
import UpdateStudent from './UpdateStudent'

class Student extends Component {
    deleteClickedStudent = () =>{
        this.props.deleteStudent(this.props.student);
    }
    
    render(){
        return (
            <li data-students-index={ this.props.student.id }>
                <div>
                <span> { this.props.student.name } </span>
                <a 
                href='#removestudent'
                className="remove"
                onClick={ this.deleteClickedStudent }>
                Delete
                </a>
                </div>
                <UpdateStudent
                student={this.props.student}
                buttonName='Update Student!'
                updateStudent={ this.props.updateStudent}/>
            </li>
        )
    }
}

export default Student