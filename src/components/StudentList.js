import React, {Component} from 'react';
import Student from './Student';

class StudentList extends Component {
    render(){
        
        let students = this.props.students.map( (student) => {
            console.log(this.props.students)
        return (
            <Student
            key={student._id}
            student={ student }
            // name={this.props.students}
            deleteStudent={ this.props.deleteStudent }
            updateStudent={ this.props.updateStudent }/>
        )
        })
        return(
        <ul>
            {students}
        </ul>
        )
        
    }
}

export default StudentList