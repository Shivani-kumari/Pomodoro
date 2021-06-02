import React ,{useState} from 'react'
import { Button } from 'antd';
function PomodoraTasks() {
    const [open,setOpen] = useState(false)
    return (
        <div>
           
           {
               open === false && 
               <Button type="dashed" block size="large">
               Dashed
                </Button>
           } 
        </div>
    )
}

export default PomodoraTasks
