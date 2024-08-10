import React from 'react';
import { ControlsContainer, ControlButton } from './styles';

const Controls = ({
  isPlaying,
  autoPlayEnabled,
  onPreviousSong,
  onPlayPause,
  onNextSong,
  onAutoPlayToggle,
}) => (
  <ControlsContainer>
    <ControlButton onClick={onPreviousSong}>पिछला गीत</ControlButton>
    <ControlButton onClick={onPlayPause}>
      {isPlaying ? 'रोकें' : 'चलाएं'}
    </ControlButton>
    <ControlButton onClick={onNextSong}>अगला गीत</ControlButton>
    <ControlButton
      onClick={onAutoPlayToggle}
      className={autoPlayEnabled ? 'active' : ''}
    >
      {autoPlayEnabled ? 'स्वतः चलाना बंद करें' : 'स्वतः चलाना चालू करें'}
    </ControlButton>
  </ControlsContainer>
);

export default Controls;