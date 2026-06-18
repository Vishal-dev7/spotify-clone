import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login' 
import { getTokenfromUrl } from './Spotify'

const[code,setCode]=usestate(null);
function App() {


  useEffect(()=>{
    const { _code}=getTokenfromUrl();
    console.log("token >>>>",_code);
    if (_code) setCode(_code);
  },[])

  return (
    <>
      {
        code ? <h1>logged in</h1>:<Login/>
      }
       
       <Login/>
            
    </>
  )
}

export default App
