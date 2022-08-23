import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import SearchTagElement from '../SearchTagElement';
import {DescriptionText, SearchListView, TextView} from './TagSearchList.styles';

import useDebounce from 'src/hooks/useDebounce';
import useGetSearchedTag from 'src/querys/useGetSearchedTag';

const TagSearchList = ({
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
  const {data, refetch} = useGetSearchedTag(inputWord);
  const debounce = useDebounce(refetch, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!inputWord) {
      return;
    }
    debounce();
  }, [inputWord]);
  const listOnPress = (keyword: string) => {
    if (tagData.length >= 4) {
      return;
    }
    let prevData = [...tagData];
    if (prevData.find(item => keyword === item)) {
      return;
    }
    prevData.push(keyword);
    setInputWord('');
    dispatch(changeTagData(prevData));
    refetch();
  };
  return inputWord ? (
    <SearchListView>
      {data && (
        <FlatList
          renderItem={item => {
            return (
              <SearchTagElement
                item={item.item}
                key={item.item.id}
                onPress={() => listOnPress(item.item.keyword)}
              />
            );
          }}
          data={data.content}
        />
      )}
    </SearchListView>
  ) : (
    <TextView>
      <DescriptionText>촬영한 지점을 태그로 남길 수 있어요.</DescriptionText>
    </TextView>
  );
};

export default TagSearchList;
