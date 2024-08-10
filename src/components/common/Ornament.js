import React from 'react';
import styled from 'styled-components';

const OrnamentWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-repeat: repeat-x;
  background-size: contain;
  background-image: ${props => props.position === 'top'
    ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="%23ff9933"/></svg>')`
    : `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0 0 C 20 100, 50 100, 100 0 Z" fill="%23ff9933"/></svg>')`
  };
`;

const Ornament = ({ position }) => (
  <OrnamentWrapper position={position} />
);

export default Ornament;