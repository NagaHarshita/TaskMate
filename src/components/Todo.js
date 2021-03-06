import React from 'react';
import 'antd/dist/antd.css';
import './CSS/Sidebar.css'

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list : [{task: "Attend Math class"}, {task: "Complete Physics homework"}, {task: "Prepare for chemistry presentation"}]
        }
        this.addTask = this.addTask.bind(this);
    }
    addTask(lesson){
        let list = [...this.list]
        list.push(lesson);
        this.setState={
            list
        }
    }

  
    render() {
        const {list} = this.state;
        let tasks = null;
        tasks = (
            list.map(
                lesson => (
                    <ul className="flex-container" >
                        <li>{lesson.task}</li>
                    </ul>
                )
            )
        );
        return (
            <div className="Content">
                <h1>Tasks to be done</h1>
                {tasks}
            </div>
        );
    }
}

export default Todo;