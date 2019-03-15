import React, {Component} from 'react'
import StudentModel from '../models/Students';
import CourseModel from '../models/Courses';
import StudentList from '../components/StudentList.js';
import CourseList from '../components/CourseList.js';
import CreateStudent from '../components/CreateStudent';

class CoursesContainer extends Component {
    state = {
        courses: [],
        courseId:'',
        students: [],
        studentId: ''
    };

    componentDidMount(){
        this.fetchData();
    }
    
    // fetch all to students from super-crud-api
    fetchData(){
        CourseModel.all().then(res => {
            console.log(res.data, "before set state");
            this.setState({
                courses: res.data,
                courseId: '',
                students: res.data,
                studentId: ''
                
            });
            console.log(this.state.courses, "after set state");
            console.log(res.data);
        });
    }
    deleteStudent = (student) => {
        StudentModel.delete(student).then((res) =>{
            let students = this.state.students.filter(function(student){
                console.log(student.students)//array of students
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
            <h1>HI!!</h1>
            <StudentList 
            students={ this.state.students }
            updateStudent={ this.updateStudent }
            deleteStudent={ this. deleteStudent } />
            <CourseList
            courseName={this.state.name}
            />
            <CreateStudent
                createStudent={ this.createStudent } />

            
        </div>
        )
    }
}

export default CoursesContainer