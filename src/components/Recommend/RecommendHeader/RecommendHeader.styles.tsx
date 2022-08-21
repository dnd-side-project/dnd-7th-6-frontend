import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const HeaderContainer = styled.View({
  width: '100%',
  justifyContent: 'center',
  height: heightPercentage(54),
});

export const HeaderImage = styled.Image({
  marginLeft: widthPercentage(16),
  resizeMode: 'contain',
  width: widthPercentage(115),
});

export const IconContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'absolute',
  right: widthPercentage(12),
});

export const SpecIconWrapper = styled.View({
  marginLeft: widthPercentage(15),
});
