import React from 'react';

import {BannerImage, Conatiner} from './RecommendCommonBanner.styles';
const RecommendCommonBanner = () => {
  return (
    <Conatiner>
      <BannerImage
        source={require('src/assets/images/RecommendScreen/Banner_Home_02.png')}
        resizeMode="contain"
      />
    </Conatiner>
  );
};

export default RecommendCommonBanner;
