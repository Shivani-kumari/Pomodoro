import React , {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

function Task({task}) {
    const {removeTask,findItem} = useContext(TaskListContext)
    return (
        <div>
            <li className="list-item">
                <span>{task.title}</span>
                <button className="btn-delete task-btn" onClick={()=>removeTask(task.id)}>
                <i className="fas fa-trash-alt"></i>
                </button>

                <button className="btn-edit task-btn" onClick={()=>findItem(task.id)}>
                <i className="fas fa-pen"></i>
                </button>
                
            </li>
        </div>
    )
}

export default Task
