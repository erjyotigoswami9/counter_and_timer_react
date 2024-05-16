import React, { useState } from 'react'

var tid ;

export const Timer = () => {
    let [timer, setTimer] = useState(0) ;

    console.log("timer app...") ;
    
    function startTimer(){
        tid = setInterval(() => {
            setTimer(old=>old+1) ;
        }, 1000);
    }

    function stopTimer(){
        clearInterval(tid) ;
    }

    function resetTimer(){
        clearInterval(tid) ;
        setTimer(0) ;
    }
    
  return (
    <div style={{width:"fit-content" , padding:"40px", margin:"auto", marginTop:"50px", textAlign:"center", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <h1>Timer</h1>
        <hr/>
        <h2>{timer}</h2><br/>
        <button onClick={()=>startTimer()} style={{backgroundColor:"green", padding:"12px", color:"white", border:"none", borderRadius:"8px", fontSize:"18px", fontWeight:"600"}}> <> Start </> </button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>stopTimer()} style={{backgroundColor:"red", padding:"12px", color:"white", border:"none", borderRadius:"8px", fontSize:"18px", fontWeight:"600"}}> <> Stop </> </button> &nbsp;&nbsp;&nbsp;&nbsp;       
        <button onClick={()=>resetTimer()} style={{backgroundColor:"blue", padding:"12px", color:"white", border:"none", borderRadius:"8px", fontSize:"18px", fontWeight:"600"}}> <> Reset </> </button><br/><br/>
    </div>
  )
}
