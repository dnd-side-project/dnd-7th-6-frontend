import {useNavigation} from '@react-navigation/native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {
  NativeSyntheticEvent,
  ScrollView,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import TagInputChip from '../Chip/TagInputChip';
import {
  ChipScrollViewWrapper,
  RightCountView,
  SearchBarCotainer,
  SearchBarTextInput,
} from './ReviewTagInput.styles';

import {changeTagData} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';

const ReviewTagInput = ({
  inputWord,
  setInputWord,
}: {
  inputWord: string;
  setInputWord: Dispatch<SetStateAction<string>>;
}) => {
  const tagData: any = useSelector((state: RootState) => state.reviewReducer.tagData);
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
  const chipEndEditingEvent = () => {
    let prevData = [...tagData];
    prevData.push(inputWord);
    dispatch(changeTagData(prevData));
    setInputWord('');
  };
  return (
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
