import React from 'react';
import 'antd/dist/antd.css';
import './CSS/Sidebar.css'
import './CSS/upcomingLessons.css'

class Lessons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : [{subject: 'Maths', timings: '9:00-10:00'}, {subject: 'Physics', timings: '10:00-12:00'}, {subject: 'Chemistry', timings: '2:00-3:00'}]
        }
        this.addLesson = this.addLesson.bind(this);
    }
    addLesson(lesson){
        let list = [...this.list]
        list.push(lesson);
        this.setState={
            list
        }
    }

  
    render() {
        const {list} = this.state;
        let lessons = null;
        lessons = (
            list.map(
                lesson => (
                    <div className="flex-container" >
                        <div className="flex-item-left">{lesson.subject}</div>
                        <div className="flex-item-right">{lesson.timings}</div>
                    </div>
                )
            )
        );
        return (
            <div className="Content">
                <h1>Upcoming Lessons</h1>
                {lessons}
            </div>
        );
    }
}

export default Lessons;