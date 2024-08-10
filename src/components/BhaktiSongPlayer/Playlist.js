import React from 'react';
import { PlaylistContainer, PlaylistItem } from './styles';

const Playlist = ({ playlist, currentVideoId, onSongSelect }) => (
  <PlaylistContainer>
    <h2>हाल ही में बजाए गए</h2>
    {playlist.length > 0 ? (
      <ul>
        {playlist.map((item) => (
          <PlaylistItem
            key={item.id.videoId}
            onClick={() => onSongSelect(item)}
            className={item.id.videoId === currentVideoId ? 'active' : ''}
          >
            {item.snippet.title}
          </PlaylistItem>
        ))}
      </ul>
    ) : (
      <p>अभी तक कोई गाना नहीं बजाया गया है।</p>
    )}
  </PlaylistContainer>
);

export default Playlist;