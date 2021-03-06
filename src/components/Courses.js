import React from 'react';
import 'antd/dist/antd.css';
import './CSS/Sidebar.css'
import './CSS/upcomingLessons.css'

class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : [{subject: 'Maths', description: "Lorem ipsum ", lessons: 36}, {subject: 'Physics', description: "Lorem ipsum ", lessons: 30}]
        }
    }
  
    render() {
        const {list} = this.state;
        let courses = null;
        courses = (
            list.map(
                course => (
                    <div className="flex-container" >
                        <h1>{course.subject}</h1>
                        <div className="flex-item-left">{course.description}</div>
                        <div className="flex-item-right">{course.lessons}</div>
                    </div>
                )
            )
        );
        return (
            <div className="Content">
                <h1>Courses</h1>
                {courses}
            </div>
        );
    }
}

export default Courses;