import React from 'react';
import {useDispatch} from 'react-redux';

import {PressableSearchIcon} from '../utils/Pressables/PressableIcons';
import {
  SearchBarCotainer,
  SearchBarIconWrapper,
  SearchBarTextInput,
} from './MapSearchTextInput.styles';

import {inputSearchKeyword} from 'src/redux/actions/MapAction';

const MapSearchTextInput = () => {
  const dispatch = useDispatch();

  return (
    <SearchBarCotainer>
      <SearchBarIconWrapper>
        <PressableSearchIcon />
      </SearchBarIconWrapper>
      <SearchBarTextInput
        onChangeText={text => {
          dispatch(inputSearchKeyword(text));
        }}
        clearButtonMode="always"
        autoFocus={true}
        placeholder="구, 동, 건물 명, 역등으로 검색해주세요."
      />
    </SearchBarCotainer>
  );
};
export default MapSearchTextInput;
