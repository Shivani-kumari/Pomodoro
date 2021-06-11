import React , {useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

function Task({task}) {
    const {removeTask,findItem} = useContext(TaskListContext)
    const [checked, setChecked] = React.useState(false);
    return (
        <div>
            <li className="list-item">
            <label>
            <input type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
             />
                {checked === false && <span>{task.title}</span>}
                {checked === true && <span style={{textDecorationLine:"line-through"}}>{task.title}</span>}
            </label>
                
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
