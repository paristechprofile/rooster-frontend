import React, {Component} from 'react';
import Course from './Course';

class CourseList extends Component {
    render(){
        
        let courses = this.props.courses.map((course) => {
            // console.log(course)
        return (
            <div>
                <Course
                key={course._id}
                course={ course }
                />
            </div>
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