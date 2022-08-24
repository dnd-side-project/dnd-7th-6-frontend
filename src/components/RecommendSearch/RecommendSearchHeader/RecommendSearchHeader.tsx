import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  PressableDeleteView,
  RightIconAndroid,
  SearchBarCotainer,
  SearchBarIconWrapper,
  SearchBarTextInput,
} from './RecommendSearchHeader.styles';

import {
  PressableSearchIcon,
  PressableDeleteIcon,
} from 'src/components/utils/Pressables/PressableIcons';
import {setCustomTagKeyword} from 'src/redux/actions/RecommendAction';
import {RootState} from 'src/redux/store';
import valueOfPlatform from 'src/utils/valueOfPlatform';

const RecommendSearchInput = () => {
  const keyword: string = useSelector((state: RootState) => state.recommendReducer.tagKeyword);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCustomTagKeyword(''));
  }, [dispatch]);
  return (
    <SearchBarCotainer>
      <SearchBarIconWrapper>
        <PressableSearchIcon />
      </SearchBarIconWrapper>
      <SearchBarTextInput
        onChangeText={text => {
          dispatch(setCustomTagKeyword(text));
        }}
        value={keyword}
        clearButtonMode="always"
        autoFocus={true}
        placeholder="관심있는 단어를 입력해보세요."
      />
      {valueOfPlatform({
        ios: <></>,
        android: keyword ? (
          <RightIconAndroid
            onPress={() => {
              dispatch(setCustomTagKeyword(''));
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
export default RecommendSearchInput;
