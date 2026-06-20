import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login' 
import { getTokenfromUrl } from './Spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify =new SpotifyWebApi();

function App() {

const[code,setCode]=useState(null);
  useEffect(()=>{
    const { code}=getTokenfromUrl();
    console.log("token >>>>",code);
    if (code)
      { 
        setCode(code);
        // spotify.setAccessToken(code);
        // spotify.getMe(code).then((user)=>
        // {
        //   console.log('➡️',user);
        // })
        console.log(spotify);
console.log(typeof spotify);
console.log(spotify?.setAccessToken);
      }
  },[])

  return (
    <>
      {
        code ? <h1>logged in</h1>:<Login/>
      }
       
       
            
    </>
  )
}

export default App
