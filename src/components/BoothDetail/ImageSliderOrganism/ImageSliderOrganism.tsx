import React, {useState} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Swiper from 'react-native-swiper';

import {Container, style} from './ImageSliderOrganism.styles';

import BoothDetailData from 'src/BoothDetailData';
import theme from 'src/styles/Theme';

const ImageSliderOrganism = () => {
  const [data] = useState(BoothDetailData);

  return (
    <Container>
      <Swiper.default
        activeDotColor={theme.colors.grayscale[5]}
        dotColor={theme.colors.grayscale[2]}>
        {data.mainPhoto.map(uri => (
          <View key={uri}>
            <FastImage source={{uri}} style={style.fastImage} />
          </View>
        ))}
      </Swiper.default>
    </Container>
  );
};

export default ImageSliderOrganism;
