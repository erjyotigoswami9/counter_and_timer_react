import React, { useState } from 'react'

export const Counter = () => {
    let [count, setCount] = useState(0) ;
    console.log("counter app...") ;
  return (
    <div style={{width:"fit-content" , padding:"40px", margin:"auto", marginTop:"50px", textAlign:"center", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <h1>Counter</h1>
        <hr/>
        <h2>{count}</h2><br/>
        <button onClick={()=>setCount(count-1)} style={{backgroundColor:"lightblue", padding:"12px", color:"red", border:"none", borderRadius:"8px", fontSize:"18px", fontWeight:"600"}}> <> - </> </button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={()=>setCount(count+1)} style={{backgroundColor:"lightgoldenrodyellow", padding:"12px", color:"green", border:"none", borderRadius:"8px", fontSize:"18px", fontWeight:"600"}}> <> + </> </button><br/><br/>
    </div>
  )
}
