import React,{useContext,useState,useEffect} from 'react'
import {TaskListContext} from '../pomodoraContext/TaskListContext'
import { PlusCircleOutlined,CaretDownOutlined,CaretUpOutlined, } from  '@ant-design/icons';
import styled from "styled-components";
import { Card,Input,Button } from 'antd';

const OpenButton = styled.button`
  padding: 20px 100px;
  cursor: pointer;
  background : white;
  transition: ease border-bottom 250ms;
  border-style: dotted;
    opacity: 1;
  
`;

const SaveButton = styled.button`
background-color: red;
border: none;
color: white;
padding: 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
border-radius: 4px;  
`;
const CancelButton = styled.button`
border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: orange; 
`;
const DeleteButton = styled.button`
border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: black; 
`;


export default function TaskForm() {
    const {addTask,count,setCount,editItem,editTask,open,setOpen,setEditItem,removeTask} = useContext(TaskListContext)
    const [title,setTitle] = useState("")

    // const [open,setOpen] = useState(false)

    const clickOpen = ()=> setOpen(true)
    const clickClose = ()=> {
        setEditItem(null)
        setTitle("")
        setCount(0)
        setOpen(false)
    }

    const clickUpCount = ()=>setCount(count+1)
    const clickDownCount = ()=>{
        if(count >0)
            setCount(count-1)
        
    }

    const handleSubmit = () => {
        if(editItem === null){
            addTask(title,count)
            setTitle("")
            setCount(0)
            setOpen(false)
        }else{
            editTask(title,editItem.id,count)
            setOpen(false)

        }
    }

    const handleChange = e => {
        setTitle(e.target.value)
        
      }

      useEffect(()=>{
        if(editItem !==null){
          setTitle(editItem.title)
          setCount(editItem.count)
        }else{
            setTitle('')
        }
    },[editItem])

    
    return (
        
          <div>
           
           {
               open === false && 
               <OpenButton onClick={clickOpen}><PlusCircleOutlined />  Primary Button</OpenButton>
           }
            {
                open === true &&

                <Card style={{ width: "300px", backgroundColor: "pink" }}>
                <Input placeholder="What are you Working on ?" value={title} 
                bordered={false} onChange={handleChange} />
                
                
                <h3>{count}</h3>
                <Button shape="circle" icon={<CaretDownOutlined />} onClick={clickDownCount}></Button>
                <Button shape="circle" icon={<CaretUpOutlined />} onClick={clickUpCount}></Button>
                <br/>
                {editItem !== null && <DeleteButton onClick={()=>removeTask(editItem.id)}>Delete</DeleteButton>}
                <CancelButton onClick={clickClose}>Cancel</CancelButton>
                <SaveButton onClick={handleSubmit}>Save</SaveButton>
                
            </Card>
            }
            
           
        </div>  
      
    )
}
