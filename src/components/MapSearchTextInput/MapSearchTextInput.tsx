import React from 'react';

import {PressableSearchIcon} from '../utils/Pressables/PressableIcons';
import {
  SearchBarCotainer,
  SearchBarIconWrapper,
  SearchBarTextInput,
} from './MapSearchTextInput.styles';

const MapSearchTextInput = () => {
  return (
    <SearchBarCotainer>
      <SearchBarIconWrapper>
        <PressableSearchIcon />
      </SearchBarIconWrapper>
      <SearchBarTextInput />
    </SearchBarCotainer>
  );
};
export default MapSearchTextInput;
