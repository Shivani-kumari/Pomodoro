
import React,{useState} from 'react'
import styled from "styled-components";
import {Howl, Howler} from 'howler';

const Tab = styled.button`
opacity: 0.6;
 background : white;
padding: 8px 28px;
border-radius: 20px;
line-height: 24px;
font-size: 14px;
font-weight: 600;
letter-spacing: .02em;
border: none;
background : white;
outline: none;
position: relative;
overflow: hidden;
cursor: pointer;
  margin-right: 20px;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const StartButton = styled.button`
padding: 8px 28px;
border-radius: 20px;
line-height: 24px;
font-size: 14px;
font-weight: 600;
letter-spacing: .02em;
border: none;
background : white;
outline: none;
position: relative;
overflow: hidden;
cursor: pointer;
margin-right: 20px;
`;

const StopButton = styled.button`
padding: 8px 28px;
border-radius: 20px;
line-height: 24px;
font-size: 14px;
font-weight: 600;
letter-spacing: .02em;
border: none;
background : white;
outline: none;
position: relative;
overflow: hidden;
cursor: pointer;
margin-right: 20px;
`;



export default function Promodora() {
    const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [start,setStart] = useState(false)
  const [promodoro,setPromodoro] = useState(true)

  const[shortBreak,setShortBreak] =useState(false)
  const [longBreak,setLongBreak] = useState(false)

  const[shortMinutes,setShortMinutes] = useState(1)
  const [shortSeconds,setShortSeconds]=useState(0)
  const [shortStart,setShortStart] = useState(false)

    const [longMinutes,setLongMinutes] = useState(60)
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

  const soundPlay = (src)=>{
    const sound = new Howl ({
      src,
      html5:true
    })
    sound.play()
  }

  const setTime = (type)=>{
        setActive(type)
        if(type==="Pomodoro"){
            setShortBreak(false)
            
            setLongBreak(false)
           
            setShortSeconds(0)
            setShortMinutes(1)

            setLongSeconds(0)
            setLongMinutes(60)

            setLongStart(false)
            setShortStart(false)
            setPromodoro(true)
            
        }
        if(type==="Short Break"){
            setStart(false)
            
            setLongBreak(false)
            
            setSeconds(0)
            setMinutes(25)

            setLongSeconds(0)
            setLongMinutes(60)

            setLongStart(false)
            setPromodoro(false)
            setShortStart(true)
            
           
        }
        if(type==="Long Break"){
          setShortBreak(false)
          setStart(false)

          setSeconds(0)
          setMinutes(25)

          setShortSeconds(0)
          setShortMinutes(1)

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
              }else{
                soundPlay("https://assets.coderrocketfuel.com/pomodoro-times-up.mp3")
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
        
        <div >
         
            <div style={{textAlign:"center"}}>
                
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
      <div className="pomodoro">
       
     {promodoro && `${timerMinutes}:${timerSeconds}`} 
     {shortStart && `${ShortTimeimerMinutes}:${ShortTimeSeconds}`}
     {longStart && `${LongTimeMinutes}:${LongTimeSeconds}`}
      </div>
      {promodoro && <div style={{textAlign:"center"}}><StartButton onClick={tick}>START</StartButton>
      <StopButton onClick={stop}>STOP</StopButton>
      <p>Time to work</p></div>}

      {shortStart && <div style={{textAlign:"center"}}><StartButton onClick={clickShort}>START</StartButton>
      <StopButton onClick={clickShortStop}>STOP</StopButton>
      <p>Time for a break</p></div>}

      {longStart && <div style={{textAlign:"center"}}><StartButton onClick={clickLong}>START</StartButton>
    {setLongBreak && <StopButton onClick={clickLongStop}>STOP</StopButton>}
      <p>Time for a break</p></div>}
    
    </div>
    )
    
}
