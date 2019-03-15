import React, {Component} from 'react'
import StudentModel from '../models/Students';
import CourseModel from '../models/Courses';
import StudentList from '../components/StudentList.js';
import CourseList from '../components/CourseList.js';
import CreateStudent from '../components/CreateStudent';

class CoursesContainer extends Component {
    constructor() {
        super();
        this.state = {
        courses: [],
        students: [],
        student: ''
        };
    }
    componentDidMount(){
        this.fetchCourses();
        this.fetchStudents();
    }
    // fetch all to students from super-crud-api
    fetchCourses(){
        CourseModel.all().then(res => {
            console.log(res, "before set state");
            this.setState({
                courses: res.data,
                courseId: '',
                courseName: '',
                courseLocation: '',
                courseDates: '',
                courseStudents: []
            });
        });
    }
    fetchStudents(){
        StudentModel.all().then(res => {
            console.log(res, "before set state");
            this.setState({
                students: res.data,
                student: '', 
                newStudent: '',
                studentId: '',
                studentName: '',
                studentAge: '',
                studentBio: '',
                studentCourseId:'' 
                
                
            });
        });
    }
    
    deleteStudent = (student) => {
        StudentModel.delete(student).then((res) =>{
            let students = this.state.students.filter(function(student){
                // console.log() 
                // console.log(student.students) //array of students; how do i grab correct id?
                console.log(students.students)  
                return students.students !== res.data._id
                
            });
            this.setState({ students }) //ES6 magic. If the object key value pair is the same, name you can say just the one word
            console.log('deleting a new student',student)
        })
    }
    onInputChange = (e) => {
        console.log(e.target.value)
        this.setState({
        student: e.target.value
        })
    }
    onFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.student)
    let student = this.state.student
    this.createStudent(student)
    // this.setState({ student })
    console.log(student)
    }
    createStudent = (student) => {
        let newStudent = {
            body: student 
        }
        StudentModel.create(newStudent).then((res) => {
            console.log(res)
            let students = this.state.students
            let newStudents = students.push(res.data)
            console.log(students)
            this.setState({ students: newStudents })
            console.log('creating a new student',newStudents)
        })
    }
    updateStudent = (student, studentBody, studentId) => {
        function isUpdatedStudent(Student) {
            return Student._id === studentId;
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
            <div className='row'>
                <div className='col-4'>
                <h2>Offered Courses</h2>
                <CourseList
                courses={ this.state.courses }
                courseName={ this.state.name }
                
                />
                </div>
            </div>
            <div className='col-8'>
            <h2>Add Yourself To The Rooster's Waitlist</h2>
                <CreateStudent
                createStudent={ this.createStudent }
                student={this.props.student}
                studentName={this.createStudent} 
                onInputChange={this.props.onInputChange}
                onFormSubmit={this.props.onFormSubmit}/>
            <h2>Rooster</h2>
                <StudentList 
                students={ this.state.students }
                updateStudent={ this.updateStudent }
                deleteStudent={ this.deleteStudent }/>

            </div>
        </div>
        )
    }
}

export default CoursesContainer