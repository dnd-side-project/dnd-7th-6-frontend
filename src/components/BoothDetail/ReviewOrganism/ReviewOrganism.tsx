import React from 'react';

import {ButtonWrapper, Container, Count, Headline, TextContainer} from './ReviewOrganism.styles';

import PressableAddition from 'src/components/PressableAddition';
import ReviewSummary from 'src/components/utils/ReviewSummary';
import useGetInfiniteReviewsMock from 'src/querys/useGetInfiniteReviews';
import toLocaleString from 'src/utils/toLocaleString';

interface Props {
  id: number;
}

const ReviewOrganism = ({id}: Props) => {
  const data = useGetInfiniteReviewsMock(id);

  return (
    <Container>
      <TextContainer>
        <Headline>포톡커들의 상세 리뷰 </Headline>
        <Count> {toLocaleString(data.totalElements)}</Count>
      </TextContainer>
      {data.content.map((review, i) => (
        <ReviewSummary key={review.id} {...review} isLast={i >= data.content.length - 1} />
      ))}
      <ButtonWrapper>
        <PressableAddition>리뷰 모두보기</PressableAddition>
      </ButtonWrapper>
    </Container>
  );
};

export default ReviewOrganism;
