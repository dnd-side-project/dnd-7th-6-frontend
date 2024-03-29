import React, {useRef} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';

import {ScrollUpWrapper, style} from './ReviewListOrganism.styles';

import ScrollUpButton from 'src/components/utils/Button/ScrollUpButton';
import ReviewSummary from 'src/components/utils/ReviewSummary';
import useGetInfiniteReviews from 'src/querys/useGetInfiniteReviews';

interface Props {
  boothId: number;
}

const ReviewListOrganism = ({boothId}: Props) => {
  const listRef = useRef<FlatList>(null);
  const {data, fetchNextPage, isRefetching} = useGetInfiniteReviews(boothId);
  const reviews = data?.pages.flatMap(({content}) => content) || [];

  return (
    <>
      <FlatList
        onEndReached={() => fetchNextPage()}
        ref={listRef}
        data={reviews}
        style={style.flatList}
        renderItem={({item}) => <ReviewSummary {...item} />}
        ListFooterComponent={isRefetching ? <ActivityIndicator size="large" /> : <></>}
      />
      <ScrollUpWrapper>
        <ScrollUpButton onPress={() => listRef.current?.scrollToOffset({offset: 0})} />
      </ScrollUpWrapper>
    </>
  );
};

export default ReviewListOrganism;
