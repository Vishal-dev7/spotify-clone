import React from 'react'
import Logo from './/assets/logo-black.png'
import './css/Login.css'
import { loginurl } from './Spotify.jsx'
const Login = () => {
  return (
    <div className=' login'>
      {/* logo */}
      <img src={Logo} alt="Spotify Logo" />

      {/* button */}
      <a href={loginurl} className='bg-green-500 rounded-3xl  font-semibold  '>Login with Spotify</a>
    </div>
  )
}

export default Login
