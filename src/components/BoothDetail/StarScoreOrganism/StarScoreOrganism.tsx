import React from 'react';
import {Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Count, Headline} from '../ReviewOrganism/ReviewOrganism.styles';
import {StarScore, StarScoreBox, style} from './StarScoreOrganism.styles';

import StarIcon20 from 'src/icons/StarIcon20';
import theme from 'src/styles/Theme';
import {PhotoBoothResponse} from 'src/types';
import getBoothBanner from 'src/utils/getBoothBanner';

interface Props {
  booth?: PhotoBoothResponse;
}

const StarScoreOrganism = ({booth}: Props) => {
  return (
    <>
      {!!booth && (
        <FastImage source={getBoothBanner(booth.photoBooth.starScore)} style={style.fastImage}>
          {!!booth?.photoBooth.starScore && (
            <Text>
              <Headline>포톡커들의 만족도 </Headline>
              <Count> {booth?.photoBooth.reviewCount}</Count>
            </Text>
          )}
          <StarScoreBox>
            <StarIcon20 color={theme.colors.grayscale[1]} />
            <StarScore>{booth?.photoBooth.starScore?.toFixed(1)}</StarScore>
          </StarScoreBox>
        </FastImage>
      )}
    </>
  );
};

export default StarScoreOrganism;
