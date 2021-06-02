import React from 'react'
import TaskList from './components/TaskList'
import TaskContextProvider from './context/TaskListContext'
import TaskForm from './components/TaskForm'
function Task() {
    return (
        <TaskContextProvider>
             <div className="app-wrapper">
             <div className="main">
                 <TaskForm/>
             <TaskList/>
             </div>
          
        </div>
        </TaskContextProvider>
       
    )
}

export default Task
