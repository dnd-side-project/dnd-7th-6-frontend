import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {BannerImage, Container, PressableImageWrapper} from './ReviewBoothPressableBanner.styles';
const ReviewBoothPressableBanner = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <PressableImageWrapper onPress={() => navigation.navigate('Booth' as never)}>
        <BannerImage source={require('src/assets/images/reviewBanner.png')} resizeMode="contain" />
      </PressableImageWrapper>
    </Container>
  );
};
export default ReviewBoothPressableBanner;
