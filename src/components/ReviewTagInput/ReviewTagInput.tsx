import {useNavigation} from '@react-navigation/native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {NativeSyntheticEvent, ScrollView, TextInputKeyPressEventData} from 'react-native';
import {useDispatch} from 'react-redux';

import TagInputChip from '../Chip/TagInputChip';
import {
  ChipScrollViewWrapper,
  ChipTextInput,
  RightCountView,
  SearchBarCotainer,
  SearchBarTextInput,
} from './ReviewTagInput.styles';

const ReviewTagInput = ({
  inputWord,
  setInputWord,
  tagData,
  changeTagData,
}: {
  inputWord: string;
  setInputWord: Dispatch<SetStateAction<string>>;
  tagData: string[];
  changeTagData: any;
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [chipMode, setChipMode] = useState(false);

  //태그 데이터 제거
  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
        setInputWord('');
        navigation.dispatch(e.data.action);
      }),
    [navigation],
  );

  useEffect(() => {
    if (inputWord === '') {
      setChipMode(false);
    }
  }, [inputWord]);

  const searchTextInputOnPress = (text: string) => {
    setInputWord(text);
    setChipMode(true);
  };
  const chipTextInputOnPress = (text: string) => {
    setInputWord(text);
  };
  const searchTextEventOnPress = (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (event.nativeEvent.key === 'Backspace') {
      if (inputWord.length === 0) {
        const nextData = [...tagData].filter((item, i) => {
          return tagData.length - 1 !== i;
        });
        dispatch(changeTagData(nextData));
      }
    }
  };
  const chipTextEventOnPress = () => {
    let prevData = [...tagData];
    prevData.push(inputWord);
    dispatch(changeTagData(prevData));
    setInputWord('');
  };
  return (
    <SearchBarCotainer>
      <ChipScrollViewWrapper>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tagData.length > 0 ? (
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
              <ChipTextInput
                autoFocus
                onChangeText={chipTextInputOnPress}
                onSubmitEditing={chipTextEventOnPress}
                value={inputWord}
              />
            </TagInputChip>
          ) : tagData.length >= 4 ? (
            <></>
          ) : (
            <SearchBarTextInput
              autoFocus
              placeholder="태그를 입력해 주세요."
              onChangeText={searchTextInputOnPress}
              onKeyPress={searchTextEventOnPress}
              value={inputWord}
            />
          )}
        </ScrollView>
      </ChipScrollViewWrapper>
      <RightCountView>{tagData.length}/4</RightCountView>
    </SearchBarCotainer>
  );
};

export default ReviewTagInput;
