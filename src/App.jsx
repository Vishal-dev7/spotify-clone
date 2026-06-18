import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login' 
import { getTokenfromUrl } from './Spotify'
function App() {
  useEffect(()=>{
    const { code}=getTokenfromUrl();
    console.log("token >>>>",code);
    
  },[])

  return (
    <>
      
       
       <Login/>
            
    </>
  )
}

export default App
