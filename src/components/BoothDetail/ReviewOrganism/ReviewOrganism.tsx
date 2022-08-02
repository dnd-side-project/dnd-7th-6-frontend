import React, {useState} from 'react';

import {Container, Count, Headline, ReviewContainer, TextContainer} from './ReviewOrganism.styles';

import BoothDetailData from 'src/BoothDetailData';
import PressableAddition from 'src/components/PressableAddition';
import UserReviewView from 'src/components/utils/UserReviewView';

const ReviewOrganism = () => {
  const [data] = useState(BoothDetailData);

  return (
    <Container>
      <TextContainer>
        <Headline>리뷰 </Headline>
        <Count> {data.review.total}</Count>
      </TextContainer>
      {data.review.elements.slice(0, 3).map((reviewData, i) => (
        <ReviewContainer key={i}>
          <UserReviewView
            writer={reviewData.writer}
            contents={reviewData.contents}
            date={new Date(reviewData.date)}
          />
        </ReviewContainer>
      ))}
      <PressableAddition>리뷰 더보기</PressableAddition>
    </Container>
  );
};

export default ReviewOrganism;
