
import React,{useState} from 'react'
import styled from "styled-components";

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

export default function Promodora() {
    const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [start,setStart] = useState(false)
  const [promodoro,setPromodoro] = useState(true)

  const[shortBreak,setShortBreak] =useState(false)
  const [longBreak,setLongBreak] = useState(false)

  const[shortMinutes,setShortMinutes] = useState(3)
  const [shortSeconds,setShortSeconds]=useState(0)
  const [shortStart,setShortStart] = useState(false)

    const [longMinutes,setLongMinutes] = useState(12)
    const [longSeconds,setLongSeconds]=useState(0)
    const [longStart,setLongStart] = useState(false)

  const [button]=useState( ["Pomodoro", "Short Break", "Long Break"])
  const [active, setActive] = useState(button[0]);

  

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const ShortTimeimerMinutes = shortMinutes <10 ? `0${shortMinutes}` : shortMinutes
  const ShortTimeSeconds = shortSeconds < 10 ? `0${shortSeconds}` : shortSeconds

  const LongTimeMinutes = longMinutes < 10 ? `0${longMinutes}`:longMinutes
  const LongTimeSeconds = longSeconds < 10 ? `0${longSeconds}` : longSeconds

  const tick = ()=>{
      setStart(true)
  }
  const stop = ()=>{
      setStart(false)
  }

  const reset = ()=>{
    setStart(false)
    setSeconds(59)
    setMinutes(0)
  }

  const clickShort = ()=>{
      setShortBreak(true)
  }

  const clickShortStop = ()=>{
      setShortBreak(false)
  }

  const clickLong = () =>{
      setLongBreak(true)
  }

  const clickLongStop = () =>{
      setLongBreak(false)
  }

  const setTime = (type)=>{
      alert("are you want to stop")
        setActive(type)
        if(type==="Pomodoro"){
            setShortBreak(false)
            setShortMinutes(3)
            setShortSeconds(0)

            setLongStart(false)
            setShortStart(false)
            setPromodoro(true)

            
            
        }
        if(type==="Short Break"){
            setStart(false)
            setMinutes(1)
            setSeconds(0)
            setLongStart(false)
            setPromodoro(false)
            setShortStart(true)

            
           
        }
        if(type==="Long Break"){
            setPromodoro(false)
            setShortStart(false)
            setLongStart(true)
        }
  }
  
    if(start){
        const interval = setInterval(() => {
            clearInterval(interval);
      
            if (seconds === 0) {
              if (minutes !== 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
              } 
            } else {
              setSeconds(seconds - 1);
            }
          }, 1000);
    
    }
    if(shortBreak){
        const interval = setInterval(() => {
            clearInterval(interval);
      
            if (shortSeconds === 0) {
              if (shortMinutes !== 0) {
                setShortSeconds(59);
                setShortMinutes(shortMinutes - 1);
              } 
            } else {
              setShortSeconds(shortSeconds - 1);
            }
          }, 1000);
    
    }
    if(longBreak){
        const interval = setInterval(() => {
            clearInterval(interval);
      
            if (longSeconds === 0) {
              if (longMinutes !== 0) {
                setLongSeconds(59);
                setLongMinutes(longMinutes - 1);
              } 
            } else {
              setLongSeconds(longSeconds - 1);
            }
          }, 1000);
    }
        
    
 
    return (
        
        <div className="pomodoro">
            <div>
                
        {button.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setTime(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
      <div className="message">
        
      </div>
      <div className="timer">
     {promodoro && `${timerMinutes}:${timerSeconds}`} 
     {shortStart && `${ShortTimeimerMinutes}:${ShortTimeSeconds}`}
     {longStart && `${LongTimeMinutes}:${LongTimeSeconds}`}
      </div>
      {promodoro && <><button onClick={tick}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={reset}>RESET</button></>}

      {shortStart && <><button onClick={clickShort}>START</button>
      <button onClick={clickShortStop}>STOP</button></>}

      {longStart && <><button onClick={clickLong}>START</button>
      <button onClick={clickLongStop}>STOP</button></>}
      
    </div>
    )
    
}
