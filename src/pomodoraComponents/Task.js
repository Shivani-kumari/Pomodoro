import React,{useContext} from 'react'
import {TaskListContext} from '../pomodoraContext/TaskListContext'
import {MenuOutlined} from  '@ant-design/icons';
import { Card,Input,Button } from 'antd';
export default function Task({task}) {
    const {findItem} = useContext(TaskListContext)
    return (
        <Card style={{ width: 250, backgroundColor: "pink" }}>
            <span style={{color:"black"}}>{task.title} {'0' +'/' + task.count} <Button onClick={()=>findItem(task.id)} style={{textAlign:'right'}}><MenuOutlined /></Button></span>
        </Card>
    )
}
