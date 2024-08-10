import React from 'react';
import YouTube from 'react-youtube';
import { PlayerContainer } from './styles';

const Player = ({ videoId, onReady, onStateChange }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <PlayerContainer>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </PlayerContainer>
  );
};

export default Player;