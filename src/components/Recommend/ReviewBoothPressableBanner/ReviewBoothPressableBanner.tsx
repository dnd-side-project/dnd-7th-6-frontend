import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {BannerImage, PressableImageWrapper} from './ReviewBoothPressableBanner.styles';
const ReviewBoothPressableBanner = () => {
  const navigation = useNavigation();
  return (
    <PressableImageWrapper onPress={() => navigation.navigate('BoothScreen' as never)}>
      <BannerImage
        source={require('src/assets/images/RecommendScreen/Banner_Home_01.png')}
        resizeMode="contain"
      />
    </PressableImageWrapper>
  );
};
export default ReviewBoothPressableBanner;
