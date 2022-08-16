import React from 'react';

import {Container, Count, Headline, TextContainer} from './ReviewOrganism.styles';

import ReviewSummary from 'src/components/utils/ReviewSummary';
import useGetInfiniteReviewsMock from 'src/querys/useGetInfiniteReviews';

interface Props {
  id: number;
}

const ReviewOrganism = ({id}: Props) => {
  const data = useGetInfiniteReviewsMock(id);

  return (
    <Container>
      <TextContainer>
        <Headline>포톡커들의 상세 리뷰 </Headline>
        <Count> 9999</Count>
      </TextContainer>
      {data.content.map(review => (
        <ReviewSummary key={review.id} {...review} />
      ))}
    </Container>
  );
};

export default ReviewOrganism;
