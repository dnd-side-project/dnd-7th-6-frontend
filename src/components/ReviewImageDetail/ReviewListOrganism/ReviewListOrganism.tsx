import React, {useRef} from 'react';
import {FlatList} from 'react-native';

import {ScrollUpWrapper} from './ReviewListOrganism.styles';

import ScrollUpButton from 'src/components/utils/Button/ScrollUpButton';
import ReviewSummary from 'src/components/utils/ReviewSummary';
import useGetInfiniteReviews from 'src/querys/useGetInfiniteReviews';

interface Props {
  boothId: number;
}

const ReviewListOrganism = ({boothId}: Props) => {
  const listRef = useRef<FlatList>(null);
  const {data} = useGetInfiniteReviews(boothId);
  const reviews = data?.pages.flatMap(({content}) => content) || [];

  return (
    <>
      <FlatList ref={listRef} data={reviews} renderItem={({item}) => <ReviewSummary {...item} />} />
      <ScrollUpWrapper>
        <ScrollUpButton onPress={() => listRef.current?.scrollToOffset({offset: 0})} />
      </ScrollUpWrapper>
    </>
  );
};

export default ReviewListOrganism;
