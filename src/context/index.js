import React from 'react';

export default React.createContext({
  currentSongData: {
    album: 'Swimming',
    artist: 'Mac Miller',
    image: 'swimming',
    length: 312,
    title: 'So It Goes'
  },
  isLoading: true,
  showMusicBar: true
});
