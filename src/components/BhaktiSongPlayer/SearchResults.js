import React from 'react';
import LoadingSpinner from '../common/LoadingSpinner';
import { SearchResultsContainer, SearchResultItem, SearchResultThumbnail, SearchResultTitle } from './styles';

const SearchResults = ({ results, isLoading, onSongSelect }) => (
  <SearchResultsContainer>
    <h2>खोज परिणाम</h2>
    {isLoading ? (
      <LoadingSpinner />
    ) : results.length > 0 ? (
      <ul>
        {results.map((item) => (
          <SearchResultItem
            key={item.id.videoId}
            onClick={() => onSongSelect(item)}
          >
            <SearchResultThumbnail
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <SearchResultTitle>{item.snippet.title}</SearchResultTitle>
          </SearchResultItem>
        ))}
      </ul>
    ) : (
      <p>कोई गाना नहीं मिला। कृपया दूसरा खोजें।</p>
    )}
  </SearchResultsContainer>
);

export default SearchResults;