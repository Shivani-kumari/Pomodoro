import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
export const TaskListContext = createContext()

function TaskContextProvider(props) {
    const initalState = JSON.parse(localStorage.getItem("tasks")) || []
    const [tasks,setTasks] = useState(initalState)

    const [count,setCount] = useState(0)

    const [open,setOpen] = useState(false)

const [editItem,setEditItem] = useState(null)

const addTask = (title,count)=>{
    setTasks([...tasks,{title, count ,id:uuidv4()}])
}
const removeTask = id =>{
    setTasks(tasks.filter((task)=>task.id !== id))
    setEditItem(null)
    setCount(0)
    setOpen(false)
}

const findItem = id =>{
    const item = tasks.find(task=>task.id === id)
    setEditItem(item)
    setOpen(true)
}

const editTask = (title,id,count)=>{
 const newTask =   tasks.map((task)=>task.id === id ?  {title,id,count} : task)

 setTasks(newTask)
 setEditItem(null)
}
useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])
    
return (
    <div>
       <TaskListContext.Provider value={{tasks ,
         addTask,
         editItem,
         count,
        setCount,
        removeTask,
        findItem,
        editTask,
        open,
        setOpen,
        setEditItem
        }}>
            {props.children}
        </TaskListContext.Provider> 
    </div>
)
}

export default TaskContextProvider