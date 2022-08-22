import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';

export const Conatiner = styled.View({
  marginBottom: heightPercentage(46),
});

export const BannerImage = styled.Image({
  width: '100%',
  resizeMode: 'contain',
  marginTop: -heightPercentage(40),
});
