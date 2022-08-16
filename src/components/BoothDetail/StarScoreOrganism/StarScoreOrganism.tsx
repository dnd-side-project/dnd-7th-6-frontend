import React from 'react';
import {Text} from 'react-native';

import {Count, Headline} from '../ReviewOrganism/ReviewOrganism.styles';
import {
  Container,
  StarContainer,
  StarDescription,
  StarScore,
  StarScoreBox,
} from './StarScoreOrganism.styles';

import StarIcon20 from 'src/icons/StarIcon20';
import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';

interface Props {
  id: number;
}

const StarScoreOrganism = ({id}: Props) => {
  const {data} = useGetPhotoBooth(id);

  return (
    <Container>
      <Text>
        <Headline>포톡커들의 만족도 </Headline>
        <Count> {data?.photoBooth.reviewCount}</Count>
      </Text>
      <StarContainer>
        <StarScoreBox>
          <StarIcon20 isActive />
          <StarScore>{data?.photoBooth.starCount}</StarScore>
        </StarScoreBox>
        <StarDescription>“이정도면 만족해요!”</StarDescription>
      </StarContainer>
    </Container>
  );
};

export default StarScoreOrganism;
