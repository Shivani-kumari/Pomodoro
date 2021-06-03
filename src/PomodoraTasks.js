import React from 'react'
import TaskForm from './pomodoraComponents/TaskForm'
import TaskContextProvider from './pomodoraContext/TaskListContext'
import TaskList from './pomodoraComponents/TaskList'







function PomodoraTasks() {
   

    return (
        <TaskContextProvider>
             <div className="main">
           <TaskForm/>
           <br/>
           <TaskList/>
           </div>
            
           
        </TaskContextProvider>
    )
}

export default PomodoraTasks
