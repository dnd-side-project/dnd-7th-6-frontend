import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {PressableDeleteIcon, PressableSearchIcon} from '../utils/Pressables/PressableIcons';
import {
  PressableDeleteView,
  RightIconAndroid,
  SearchBarCotainer,
  SearchBarIconWrapper,
  SearchBarTextInput,
} from './MapSearchTextInput.styles';

import {inputSearchKeyword} from 'src/redux/actions/MapAction';
import {RootState} from 'src/redux/store';
import valueOfPlatform from 'src/utils/valueOfPlatform';

const MapSearchTextInput = () => {
  const keyword: string = useSelector((state: RootState) => state.mapReducer.searchKeyword);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(inputSearchKeyword(''));
  }, [dispatch]);
  return (
    <SearchBarCotainer>
      <SearchBarIconWrapper>
        <PressableSearchIcon />
      </SearchBarIconWrapper>
      <SearchBarTextInput
        onChangeText={text => {
          dispatch(inputSearchKeyword(text));
        }}
        value={keyword}
        clearButtonMode="always"
        autoFocus={true}
        placeholder="구, 동, 건물 명, 역등으로 검색해주세요."
      />
      {valueOfPlatform({
        ios: <></>,
        android: keyword ? (
          <RightIconAndroid
            onPress={() => {
              dispatch(inputSearchKeyword(''));
            }}>
            <PressableDeleteView>
              <PressableDeleteIcon />
            </PressableDeleteView>
          </RightIconAndroid>
        ) : (
          <></>
        ),
      })}
    </SearchBarCotainer>
  );
};
export default MapSearchTextInput;
