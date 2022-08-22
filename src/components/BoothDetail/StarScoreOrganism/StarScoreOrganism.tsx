import React from 'react';
import {Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Count, Headline} from '../ReviewOrganism/ReviewOrganism.styles';
import {StarScore, StarScoreBox, style} from './StarScoreOrganism.styles';

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
    <>
      {!!data && (
        <FastImage source={getBoothBanner(data.photoBooth.starCount)} style={style.fastImage}>
          {!!data?.photoBooth.starCount && (
            <Text>
              <Headline>포톡커들의 만족도 </Headline>
              <Count> {data?.photoBooth.reviewCount}</Count>
            </Text>
          )}
          <StarScoreBox>
            <StarIcon20 color={theme.colors.grayscale[1]} />
            <StarScore>{data?.photoBooth.starCount}</StarScore>
          </StarScoreBox>
        </FastImage>
      )}
    </>
  );
};

export default StarScoreOrganism;
