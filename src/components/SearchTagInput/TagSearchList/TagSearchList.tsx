import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import SearchTagElement from '../SearchTagElement';
import {SearchListView} from './TagSearchList.styles';

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
    setInputWord('');
    let prevData = [...tagData];
    prevData.push(keyword);
    dispatch(changeTagData(prevData));
    refetch();
  };
  return data ? (
    <SearchListView>
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
    </SearchListView>
  ) : (
    <></>
  );
};

export default TagSearchList;
