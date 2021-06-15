import React, {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'
import Task from './Task'
const TaskList = () => {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
           <ul className="list">
               {tasks.map((task,index)=>{
                   return <Task task={task} key={task.id} index={index}/>
               })}
           </ul>
        </div>
    )
}

export default TaskList
