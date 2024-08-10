import React, { useState, useRef } from 'react';
import SearchForm from './SearchForm';
import Player from './Player';
import Controls from './Controls';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Ornament from '../common/Ornament';
import useYouTubeSearch from '../../hooks/useYouTubeSearch';
import { Container, Title, WelcomeMessage, OmSymbol } from './styles';

const BhaktiSongPlayer = () => {
  const [videoId, setVideoId] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const playerRef = useRef(null);

  const { searchQuery, setSearchQuery, searchResults, isLoading, handleSearch } = useYouTubeSearch();

  const playSong = (song) => {
    setVideoId(song.id.videoId);
    setPlaylist(prevPlaylist => [song, ...prevPlaylist.filter(item => item.id.videoId !== song.id.videoId)]);
    if (playerRef.current) {
      playerRef.current.loadVideoById(song.id.videoId);
    }
  };

  const playNextSong = () => {
    const currentIndex = playlist.findIndex(item => item.id.videoId === videoId);
    if (currentIndex < playlist.length - 1) {
      playSong(playlist[currentIndex + 1]);
    } else if (playlist.length > 0) {
      playSong(playlist[0]);
    }
  };

  const playPreviousSong = () => {
    const currentIndex = playlist.findIndex(item => item.id.videoId === videoId);
    if (currentIndex > 0) {
      playSong(playlist[currentIndex - 1]);
    }
  };

  const togglePlayPause = () => {
    if (playerRef.current) {
      isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
    }
  };

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const onPlayerStateChange = (event) => {
    setIsPlaying(event.data === 1);
    if (event.data === 0 && autoPlayEnabled) {
      playNextSong();
    }
  };

  return (
    <Container>
      <Ornament position="top" />
      <Title>
        <OmSymbol>ॐ</OmSymbol> भक्ति संगीत <OmSymbol>ॐ</OmSymbol>
      </Title>
      
      {!videoId && (
        <WelcomeMessage>
          <p>॥ हरे कृष्ण हरे राम ॥</p>
          <p>आपका स्वागत है। कृपया अपना पसंदीदा भक्ति गीत खोजें और सुनें।</p>
        </WelcomeMessage>
      )}

      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      {videoId && (
        <>
          <Player
            videoId={videoId}
            onReady={onPlayerReady}
            onStateChange={onPlayerStateChange}
          />
          <Controls
            isPlaying={isPlaying}
            autoPlayEnabled={autoPlayEnabled}
            onPreviousSong={playPreviousSong}
            onPlayPause={togglePlayPause}
            onNextSong={playNextSong}
            onAutoPlayToggle={() => setAutoPlayEnabled(!autoPlayEnabled)}
          />
        </>
      )}

      <SearchResults
        results={searchResults}
        isLoading={isLoading}
        onSongSelect={playSong}
      />

      <Playlist playlist={playlist} currentVideoId={videoId} onSongSelect={playSong} />

      <Ornament position="bottom" />
    </Container>
  );
};

export default BhaktiSongPlayer;