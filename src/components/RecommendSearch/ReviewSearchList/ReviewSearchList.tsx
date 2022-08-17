import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {SearchListView} from './ReviewSearchList.styles';

import SearchTagElement from 'src/components/SearchTagInput/SearchTagElement';
import useDebounce from 'src/hooks/useDebounce';
import useGetSearchedTag from 'src/querys/useGetSearchedTag';
import {RootState} from 'src/redux/store';

const ReviewSearchList = () => {
  const keyword: string = useSelector((state: RootState) => state.recommendReducer.tagKeyword);
  const {data, refetch} = useGetSearchedTag(keyword);
  const debounce = useDebounce(refetch, 500);
  const navigation = useNavigation();

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (!keyword) {
      return;
    }
    debounce();
  }, [keyword]);
  const listOnPress = (word: string, id: number) => {
    navigation.navigate('RecommendResult' as never, {title: word, id: id} as never);
  };
  return data ? (
    <SearchListView>
      <FlatList
        renderItem={item => {
          return (
            <SearchTagElement
              item={item.item}
              key={item.item.id}
              onPress={() => listOnPress(item.item.keyword, item.item.id)}
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

export default ReviewSearchList;
