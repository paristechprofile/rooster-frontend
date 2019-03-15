import React, {Component} from 'react'


class Course extends Component {
    render(){
        return (
            <li data-courses-index={ this.props.course.id }>
                <div>
                <span> - { this.props.course.description } </span>
                -                
                </div>
                
            </li>
        )
    }
}

export default Course