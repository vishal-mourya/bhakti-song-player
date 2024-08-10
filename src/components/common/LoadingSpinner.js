import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 153, 51, 0.3);
  border-radius: 50%;
  border-top-color: #ff9933;
  animation: ${spin} 1s ease-in-out infinite;
`;

const LoadingSpinner = () => (
  <SpinnerWrapper />
);

export default LoadingSpinner;