import React, { useState } from 'react'
import './App.css'
import Promodora from './Promodora'
import Task from './Tasks'
import PromodoraTasks from './PomodoraTasks'
import TaskList from './components/TaskList'
import TaskContextProvider from './context/TaskListContext'
import TaskForm from './components/TaskForm'
import styled from "styled-components";

const TaskButton = styled.button`
padding: 8px 30px;
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
  return (
    <>
    {/* <Task/> */}
   <div>
   {open==false &&<TaskButton onClick={clickOpen}>CREATE TASK</TaskButton>}
     </div> 
   
  
   
   {
     open == true && 
     <TaskContextProvider>
      <div style={{marginLeft:"250px"}}> <TaskButton onClick={clickClose}>CLOSE TASK</TaskButton></div> 
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


