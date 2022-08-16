import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Swiper from 'react-native-swiper';

import {Container, style} from './ImageSliderOrganism.styles';

import useGetPhotoBooth from 'src/querys/useGetPhotoBooth';
import theme from 'src/styles/Theme';

interface Props {
  id: number;
}

const ImageSliderOrganism = ({id}: Props) => {
  const {data} = useGetPhotoBooth(id);

  if (!data) {
    return <></>;
  }

  return (
    <Container>
      <Swiper.default
        activeDotColor={theme.colors.grayscale[1]}
        dotColor={theme.colors.grayscale[0] + '66'}
        dotStyle={style.dot}>
        {data.reviewImageList.map(uri => (
          <View key={uri}>
            <FastImage source={{uri}} style={style.fastImage} />
          </View>
        ))}
      </Swiper.default>
    </Container>
  );
};

export default ImageSliderOrganism;
