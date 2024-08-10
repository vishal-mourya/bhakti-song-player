import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fdf1e3;
  background-image: url('/mandala-pattern.png');
  background-repeat: repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #8b4513;
  text-align: center;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const OmSymbol = styled.span`
  font-size: 2.5rem;
  color: #ff9933;
  vertical-align: middle;
  margin: 0 10px;
`;

export const WelcomeMessage = styled.div`
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.5rem;
  color: #8b4513;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  width: 100%;
  max-width: 800px;
`;

export const SearchInput = styled.input`
  width: 70%;
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #ff9933;
  border-radius: 5px 0 0 5px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const SearchButton = styled.button`
  width: 30%;
  padding: 15px 20px;
  font-size: 1rem;
  background-color: #ff9933;
  color: white;
  border: 2px solid #ff9933;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e68a00;
  }
`;

export const PlayerContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 15px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 800px;
`;

export const ControlButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #ff9933;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e68a00;
  }

  &.active {
    background-color: #8b4513;
  }
`;

export const SearchResultsContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SearchResultItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 153, 51, 0.1);
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 153, 51, 0.2);
  }
`;

export const SearchResultThumbnail = styled.img`
  width: 120px;
  height: 90px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 5px;
`;

export const SearchResultTitle = styled.span`
  flex: 1;
  font-size: 1rem;
  color: #8b4513;
`;

export const PlaylistContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 20px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PlaylistItem = styled.li`
  padding: 10px;
  background-color: rgba(255, 153, 51, 0.1);
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 153, 51, 0.2);
  }

  &.active {
    background-color: rgba(255, 153, 51, 0.3);
    font-weight: bold;
  }
`;

export const ResponsiveStyles = `
  @media (max-width: 768px) {
    ${Title} {
      font-size: 2rem;
    }

    ${WelcomeMessage} {
      font-size: 1.2rem;
    }

    ${SearchFormContainer} {
      flex-direction: column;
      align-items: center;
    }

    ${SearchInput},
    ${SearchButton} {
      width: 100%;
      max-width: 300px;
      border-radius: 5px;
    }

    ${SearchInput} {
      margin-bottom: 10px;
    }

    ${ControlsContainer} {
      flex-direction: column;
    }

    ${ControlButton} {
      width: 100%;
    }
  }
`;
