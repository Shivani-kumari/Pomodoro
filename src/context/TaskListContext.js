import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
export const TaskListContext = createContext()

function TaskContextProvider(props) {
    const initalState = JSON.parse(localStorage.getItem("tasks")) || []
    const [tasks,setTasks] = useState(initalState)

const [editItem,setEditItem] = useState(null)

const addTask = (title)=>{
    setTasks([...tasks,{title,id:uuidv4()}])
}

const removeTask = id =>{
    setTasks(tasks.filter((task)=>task.id !== id))
}

const findItem = id =>{
    const item = tasks.find(task=>task.id === id)
    setEditItem(item)
}

const editTask = (title,id)=>{
 const newTask =   tasks.map((task)=>task.id === id ?  {title,id} : task)

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
             removeTask,
             findItem,
             editItem,
             editTask}}>
                {props.children}
            </TaskListContext.Provider> 
        </div>
    )
}

export default TaskContextProvider