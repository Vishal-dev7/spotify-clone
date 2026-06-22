import React, { useEffect, useState } from 'react';

// Player receives the spotify API instance and the logged-in user profile
const Player = ({ spotify, user }) => {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    if (!spotify) return;

    spotify.getMyTopTracks({ limit: 10 })
      .then((data) => setTopTracks(data.items))
      .catch(console.error);
  }, [spotify]);

  return (
    <div className='p-8 bg-black min-h-screen text-white'>
      <h1 className='text-2xl font-bold mb-2'>
        Welcome, {user?.display_name || 'Listener'} 👋
      </h1>
      <p className='text-gray-400 mb-6'>Your Top Tracks</p>

      <ul className='space-y-3'>
        {topTracks.map((track, i) => (
          <li key={track.id} className='flex items-center gap-4 p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition'>
            <span className='text-gray-500 w-6 text-right'>{i + 1}</span>
            {track.album?.images?.[2] && (
              <img src={track.album.images[2].url} alt={track.album.name} className='w-10 h-10 rounded' />
            )}
            <div>
              <p className='font-medium'>{track.name}</p>
              <p className='text-sm text-gray-400'>{track.artists.map(a => a.name).join(', ')}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export as uppercase Player (fixes the import mismatch in App.jsx)
export default Player;