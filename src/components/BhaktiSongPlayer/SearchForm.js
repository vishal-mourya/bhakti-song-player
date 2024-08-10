import React from 'react';
import { SearchFormContainer, SearchInput, SearchButton } from './styles';

const SearchForm = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <SearchFormContainer onSubmit={handleSearch}>
    <SearchInput
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="भक्ति गीत खोजें..."
    />
    <SearchButton type="submit">खोजें</SearchButton>
  </SearchFormContainer>
);

export default SearchForm;