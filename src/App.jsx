import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenfromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Try to read the token from the URL hash (after Spotify redirect)
    const { access_token } = getTokenfromUrl();

    if (access_token) {
      // Persist in sessionStorage so page refreshes don't log the user out
      sessionStorage.setItem('spotify_token', access_token);
      setToken(access_token);
      spotify.setAccessToken(access_token);

      // Fetch the logged-in user's profile
      spotify.getMe().then((userProfile) => {
        console.log('Logged in as:', userProfile);
        setUser(userProfile);
      }).catch(console.error);
    } else {
      // Check if we already have a token from a previous session
      const savedToken = sessionStorage.getItem('spotify_token');
      if (savedToken) {
        setToken(savedToken);
        spotify.setAccessToken(savedToken);
        spotify.getMe()
          .then(setUser)
          .catch(() => {
            // Token expired – clear it
            sessionStorage.removeItem('spotify_token');
            setToken(null);
          });
      }
    }
  }, []);

  return (
    <>
      {token ? <Player spotify={spotify} user={user} /> : <Login />}
    </>
  );
}

export default App;