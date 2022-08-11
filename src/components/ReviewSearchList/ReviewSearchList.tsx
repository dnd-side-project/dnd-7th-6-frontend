import React, {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import ReviewTagsSearchList from '../ReviewTagsSearchList';
import {SearchListView} from './ReviewSearchList.styles';

import useDebounce from 'src/hooks/useDebounce';
import useGetSearchedTag from 'src/querys/useGetSearchedTag';

const ReviewSearchList = ({inputWord}: {inputWord: string}) => {
  const {data, refetch} = useGetSearchedTag(inputWord);
  const debounce = useDebounce(refetch, 500);
  inputWord;
  useEffect(() => {
    if (!inputWord) {
      return;
    }
    debounce();
  }, [inputWord]);
  return data ? (
    <SearchListView>
      <FlatList
        renderItem={item => {
          return <ReviewTagsSearchList item={item.item} key={item.item.id} />;
        }}
        data={data.content}
      />
    </SearchListView>
  ) : (
    <></>
  );
};

export default ReviewSearchList;
