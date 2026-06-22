import React from 'react';
import Logo from './assets/logo-black.png';
import './css/Login.css';
import { loginUrl } from './Spotify.jsx';

const Login = () => {
  return (
    <div className='login'>
      {/* Spotify Logo */}
      <img src={Logo} alt="Spotify Logo" />

      {/* Login Button */}
      <a href={loginUrl} className='bg-green-500 rounded-3xl font-semibold'>
        Login with Spotify
      </a>
    </div>
  );
};

export default Login;
