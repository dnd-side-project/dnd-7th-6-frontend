import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import TagInputChip from '../Chip/TagInputChip';
import DismissKeyboardView from '../utils/DismissKeyboardScrollView';
import {
  ChipScrollViewWrapper,
  RightCountView,
  SearchBarCotainer,
  SearchBarTextInput,
} from './ReviewTagInput.styles';

import {changeTagData, inputTagKeyword} from 'src/redux/actions/MapAction';
import {RootState} from 'src/redux/store';

const ReviewTagInput = () => {
  const keyword: string = useSelector((state: RootState) => state.mapReducer.tagKeyword);
  const tagData: any = useSelector((state: RootState) => state.mapReducer.tagData);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [chipMode, setChipMode] = useState(false);

  //태그 데이터 제거
  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
        dispatch(inputTagKeyword(''));
        navigation.dispatch(e.data.action);
      }),
    [navigation],
  );

  useEffect(() => {
    if (keyword === '') {
      setChipMode(false);
    }
  }, [keyword]);

  const searchTextInputOnPress = (text: string) => {
    dispatch(inputTagKeyword(text));
    setChipMode(true);
  };
  const chipTextInputOnPress = (text: string) => {
    dispatch(inputTagKeyword(text));
  };
  const chipEndEditingEvent = () => {
    let prevData = [...tagData];
    prevData.push(keyword);
    dispatch(changeTagData(prevData));
    dispatch(inputTagKeyword(''));
  };
  return (
    <DismissKeyboardView>
      <SearchBarCotainer>
        <ChipScrollViewWrapper>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tagData !== [] ? (
              tagData.map((item: any, index: number) => {
                return (
                  <TagInputChip active key={index} index={index}>
                    {item}
                  </TagInputChip>
                );
              })
            ) : (
              <></>
            )}
            {chipMode ? (
              <TagInputChip>
                <TextInput
                  autoFocus
                  onChangeText={chipTextInputOnPress}
                  onEndEditing={chipEndEditingEvent}
                  value={keyword}
                />
              </TagInputChip>
            ) : tagData.length >= 4 ? (
              <></>
            ) : (
              <SearchBarTextInput
                autoFocus={true}
                placeholder="태그를 입력해 주세요."
                onChangeText={searchTextInputOnPress}
                value={keyword}
              />
            )}
          </ScrollView>
        </ChipScrollViewWrapper>
        <RightCountView>{tagData.length}/4</RightCountView>
      </SearchBarCotainer>
    </DismissKeyboardView>
  );
};

export default ReviewTagInput;
