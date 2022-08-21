import React from 'react';
import {Text} from 'react-native';
import FastImage from 'react-native-fast-image';

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
import theme from 'src/styles/Theme';
import getBoothBanner from 'src/utils/getBoothBanner';

interface Props {
  id: number;
}

const StarScoreOrganism = ({id}: Props) => {
  const {data} = useGetPhotoBooth(id);

  return (
    <Container>
      {!!data && (
        <FastImage source={getBoothBanner(data.photoBooth.starCount)}>
          <Text>
            <Headline>포톡커들의 만족도 </Headline>
            <Count> {data?.photoBooth.reviewCount}</Count>
          </Text>
          <StarContainer>
            <StarScoreBox>
              <StarIcon20 color={theme.colors.grayscale[1]} />
              <StarScore>{data?.photoBooth.starCount || ' - '}</StarScore>
            </StarScoreBox>
            <StarDescription>“이정도면 만족해요!”</StarDescription>
          </StarContainer>
        </FastImage>
      )}
    </Container>
  );
};

export default StarScoreOrganism;
