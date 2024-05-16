import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { Timer } from './components/Timer'

function App() {
  
  const c2 = 
    useMemo(()=>{
      return ()=><Counter/>
    },[])
  
  const c1 = c2() ;

  const t2 = useMemo(()=>{
    return ()=><Timer/>
  },[])

  const t1 = t2() ;

  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
      <br />
      {c1}
      {t1}
    </div>
  )
}

export default App
