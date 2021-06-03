import React,{useContext} from 'react'
import {TaskListContext} from '../pomodoraContext/TaskListContext'
import Task from './Task'

function TaskList() {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
            <ul className="list">
               {tasks.map((task)=>{
                   return <> <Task task={task} key={task.id}/> <br/></>
               })}
           </ul>
        </div>
    )
}

export default TaskList
