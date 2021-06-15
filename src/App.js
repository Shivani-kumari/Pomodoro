import React, { useState,useContext } from 'react'
import './App.css'
import Promodora from './Promodora'
import Task from './Tasks'
import {TaskListContext} from './context/TaskListContext'
import PromodoraTasks from './PomodoraTasks'
import TaskList from './components/TaskList'
import TaskContextProvider from './context/TaskListContext'
import TaskForm from './components/TaskForm'
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    
        background: pink;
    
  }
`

const TaskButton = styled.button`
padding: 8px 70px;
border-radius: 20px;
line-height: 24px;
font-size: 14px;
font-weight: 600;
letter-spacing: .02em;
border: none;
background : white;
outline: none;
overflow: hidden;
cursor: pointer;
margin-top: 20px;
`;

export default function App() {

  const [open,setOpen]= React.useState(false)
  const clickOpen = ()=>setOpen(true)
  const clickClose = ()=>setOpen(false)

  const {putTask} = useContext(TaskListContext)

  const [background,setBackground] = React.useState("pink")

  const interval = setInterval(() => {
    clearInterval(interval);

    
  }, 5000);


  return (
    <>
     <GlobalStyle/>
    {/* <Task/> */}
   <div>
   {open==false &&<TaskButton onClick={clickOpen}> TASK</TaskButton>}
     </div> 
   
  
   
   {
     open == true && 
     <TaskContextProvider>
      <div style={{marginLeft:"250px"}}> <TaskButton onClick={clickClose}>CLOSE </TaskButton></div> 
     <div id="slidenav" className="slidenav">
     <div >
                 <TaskForm/>
             <TaskList/>
             </div>
             </div>
             </TaskContextProvider>
   }  
   
  
   <div className="App">
      <Promodora/>
   </div>
      
      </>
      
 
  )
}


