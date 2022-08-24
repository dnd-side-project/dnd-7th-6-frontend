import {useNavigation} from '@react-navigation/native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {NativeSyntheticEvent, ScrollView, TextInputKeyPressEventData} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  ChipScrollViewWrapper,
  ChipTextInput,
  RightCountView,
  SearchBarCotainer,
} from './TagInput.styles';

import TagInputChip from 'src/components/Chip/TagInputChip';

const TagInput = ({
  inputWord,
  setInputWord,
  tagData,
  changeTagData,
  onDelete,
}: {
  inputWord: string;
  setInputWord: Dispatch<SetStateAction<string>>;
  tagData: string[];
  changeTagData: any;
  onDelete?: (index?: number) => void;
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
  const chipTextInputOnPress = (text: string) => {
    if (text.includes(' ')) {
      chipTextEventOnPress();
    } else {
      setInputWord(text);
    }
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
    if (!inputWord || inputWord === ' ') {
      return;
    }
    let prevData = [...tagData];
    if (prevData.find(item => inputWord === item)) {
      return;
    }
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
                <TagInputChip active key={index} index={index} deleteOnPress={onDelete}>
                  {item}
                </TagInputChip>
              );
            })
          ) : (
            <></>
          )}
          {tagData.length >= 4 ? (
            <></>
          ) : (
            <TagInputChip>
              <ChipTextInput
                autoFocus
                blurOnSubmit={false}
                onChangeText={chipTextInputOnPress}
                onSubmitEditing={chipTextEventOnPress}
                onKeyPress={searchTextEventOnPress}
                value={inputWord}
                placeholder="내용을 입력해주세요"
              />
            </TagInputChip>
          )}
        </ScrollView>
      </ChipScrollViewWrapper>
      <RightCountView>{tagData.length}/4</RightCountView>
    </SearchBarCotainer>
  );
};

export default TagInput;
