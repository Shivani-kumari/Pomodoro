import React from 'react'
import './App.css'
import Promodora from './Promodora'
import Task from './Tasks'
import PromodoraTasks from './PomodoraTasks'
export default function App() {
  return (
   <div style={{width : "100%"}}>
   <div style={{width:"50%", height: "100px" ,float: "left" ,paddingLeft:'10px' ,paddingTop:'10px'}}>
   <Promodora/>
   </div>
    
   <div style={{marginLeft: "50%", height: "100px"}}>
  
       
     <PromodoraTasks/> 
      
     </div>
  
   
  {/* <Task/> */}
  
 
      
      </div>
      
      
 
  )
}


