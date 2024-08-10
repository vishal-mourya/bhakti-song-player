import './App.css';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BhaktiSongPlayer from './components/BhaktiSongPlayer';
import { ResponsiveStyles } from './components/BhaktiSongPlayer/styles';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  }

  * {
    box-sizing: border-box;
  }

  ${ResponsiveStyles}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BhaktiSongPlayer />
      </div>
    </>
  );
}

export default App;