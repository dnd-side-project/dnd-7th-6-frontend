import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {LayoutChangeEvent} from 'react-native';

import {ButtonWrapper, Container, Count, Headline, TextContainer} from './ReviewOrganism.styles';

import PressableAddition from 'src/components/PressableAddition';
import ReviewSummary from 'src/components/utils/ReviewSummary';
import useGetInfiniteReviews from 'src/querys/useGetInfiniteReviews';
import {Review} from 'src/types';
import toLocaleString from 'src/utils/toLocaleString';

interface Props {
  id: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const ReviewOrganism = ({id, onLayout}: Props) => {
  const navigation = useNavigation();
  const {data} = useGetInfiniteReviews(id);

  if (!data) {
    return <></>;
  }

  return (
    <Container onLayout={onLayout}>
      <TextContainer>
        <Headline>포톡커들의 상세 리뷰 </Headline>
        <Count> {toLocaleString(data.pages[0].totalElements)}</Count>
      </TextContainer>
      {data.pages[0].content.slice(0, 3).map((review: Review, i: number) => (
        <ReviewSummary key={review.id} {...review} isLast={i >= data.pages[0].content.length - 1} />
      ))}
      <ButtonWrapper>
        <PressableAddition
          onPress={() => navigation.navigate('ReviewDetail' as never, {boothId: id} as never)}>
          리뷰 모두보기
        </PressableAddition>
      </ButtonWrapper>
    </Container>
  );
};

export default ReviewOrganism;
