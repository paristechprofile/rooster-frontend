import React, {Component} from 'react';
import Course from './Course';

class CourseList extends Component {
    render(){
        
        let courses = this.props.courses.map( (course) => {
        return (
            <Course
            key={course._id}
            course={ course }
            deleteCourse={ this.props.deleteCourse }
            updateCourse={ this.props.updateCourse }/>
        )
        })
        return(
        <ul>
            {courses}
        </ul>
        )
        
    }
}

export default CourseList