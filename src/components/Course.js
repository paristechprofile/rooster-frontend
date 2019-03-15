import React, {Component} from 'react'


class Course extends Component {
    deleteClickedCourse = () =>{
        this.props.deleteCourse(this.props.course);
    }
    
    render(){
        return (
            <li data-courses-index={ this.props.course.id }>
                <div>
                <span> { this.props.course.body } </span>
                <a 
                href='#removecourse'
                className="courses"
                onClick={ this.deleteClickedCourse }>
                Remove
                </a>
                </div>
                
            </li>
        )
    }
}

export default Course