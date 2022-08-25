import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Swiper from 'react-native-swiper';

import {Container, style} from './ImageSliderOrganism.styles';

import theme from 'src/styles/Theme';
import {PhotoBoothResponse} from 'src/types';

interface Props {
  booth?: PhotoBoothResponse;
}

const ImageSliderOrganism = ({booth}: Props) => {
  if (!booth) {
    return <></>;
  }

  return (
    <Container>
      {booth.reviewImageList.length <= 0 ? (
        <FastImage
          source={require('src/assets/images/boothDetailBanner/empty_booth_image.png')}
          style={style.fastImage}
        />
      ) : (
        <Swiper.default
          activeDotColor={theme.colors.grayscale[1]}
          dotColor={theme.colors.grayscale[0] + '66'}
          dotStyle={style.dot}>
          {booth.reviewImageList.slice(0, 6).map(uri => (
            <View key={uri}>
              <FastImage source={{uri}} style={style.fastImage} />
            </View>
          ))}
        </Swiper.default>
      )}
    </Container>
  );
};

export default ImageSliderOrganism;
