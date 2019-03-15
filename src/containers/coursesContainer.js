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
        courseId:'',
        students: [],
        studentId: ''
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
                // students: res.data,
                // studentName: '',
                // studentId: ''
                
            });
            console.log(this.state, "after set state");
            console.log(res.data.courses);
            console.log(res.data.students)
        });
    }
    fetchStudents(){
        StudentModel.all().then(res => {
            console.log(res, "before set state");
            this.setState({
                // courses: res.data,
                // courseId: '',
                students: res.data,
                studentName: '',
                studentId: ''
                
            });
            console.log(this.state, "after set state");
            console.log(res.data.courses);
            console.log(res.data.students)
        });
    }
    deleteStudent = (student) => {
        StudentModel.delete(student).then((res) =>{
            let students = this.state.students.filter(function(student){
                console.log(student.students) //array of students
                console.log(students.students) 
                return students.students !== res.data._id
                
            });
            this.setState({ students }) //ES6 magic. If the object key value pair is the same, name you can say just the one word
            console.log('deleting a new student',student)
        })
    }
    createStudent = (student) => {
        let newStudent = {
            body: student 
        }
        StudentModel.create(newStudent).then((res) => {
            let students = this.state.students
            let newStudent = students.push(res.data)
            console.log(res.data)
            this.setState({ newStudent })
            console.log('creating a new student',newStudent)
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
                <h1>HI!!</h1>
                <CourseList
                courses={ this.state.courses }
                courseName={ this.state.name }
                
                />
                </div>
            </div>
            <div className='col-8'>
                <CreateStudent
                createStudent={ this.createStudent } />
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