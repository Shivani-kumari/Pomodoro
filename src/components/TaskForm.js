import React,{useContext,useState,useEffect} from 'react'
import {TaskListContext} from '../context/TaskListContext'
function TaskForm() {
    const {addTask,editTask,editItem} = useContext(TaskListContext)
    const [title,setTitle] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        if(editItem === null){
            addTask(title)
            setTitle('')
        }else{
            editTask(title,editItem.id)
        }
        
    }

    const handleChange = e => {
        setTitle(e.target.value)
        
      }

      useEffect(()=>{
          if(editItem !==null){
            setTitle(editItem.title)
          }else{
              setTitle('')
          }
      },[editItem])


    return (
       <form className="form" onSubmit={handleSubmit}>
             <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
         
        </button>
        <button className="btn clear-btn"
        //  onClick={clearList}
         >
          Clear
        </button>
      </div>
       </form>
    )
}

export default TaskForm
