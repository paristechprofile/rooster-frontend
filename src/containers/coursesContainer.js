import React, {Component} from 'react'
import StudentModel from '../models/Student'
import StudentsList from '../components/StudentsList';
// import CreateStudentForm from '../components/CreateStudentForm'

class CoursesContainer extends Component {
    state = {
        students: []
    };

    componentDidMount(){
        this.fetchData();
    }
    // fetch all to students from super-crud-api
    fetchData(){
        StudentModel.all().then( (res) => {
            this.setState({
                students: res.data.students,
                student: ''
            })
        });
    }
    deleteStudent = (student) => {
        StudentModel.delete(student).then((res) =>{
            let students = this.state.students.filter(function(student){
                return student._id !== res.data._id
            });
            this.setState({ students }) //ES6 magic. If the object key value pair is the same, name you can say just the one word
        })
    }
    createStudent = (student) => {
        let newStudent = {
            body: student,
            completed: false
        }
        StudentModel.create(newStudent).then((res) => {
            let students = this.state.students
            let newStudent = student.push(res.data)
            this.setState({ newStudent })
        })
    }
    updateStudent = (student, studentBody, studentId) => {
        function isUpdatedStudent(Student) {
            return Student._id === StudentId;
        }
        StudentModel.update(studentId, studentBody).then((res) => {
            let students = this.state.students
            students.find(isUpdatedStudent).body = studentBody.body;
            this.setState({ students })
        })
    }
    render(){
        return (
        <div className='studentsContainer'>
            <StudentList 
                student={ this.state.student }
                updateStudent={ this.updateStudent }
                deleteStudent={ this. deleteStudent } />
            <CreateStudentForm
                createStudent={ this.createStudent } />
            
        </div>
        )
    }
}

export default CoursesContainer