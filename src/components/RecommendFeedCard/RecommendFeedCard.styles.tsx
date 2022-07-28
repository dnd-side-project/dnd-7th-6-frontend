import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/utils/ScreenResponse';

export const FeedCardContainer = styled.View({
  width: widthPercentage(164),
  height: heightPercentage(220),
  borderRadius: 12,
  backgroundColor: '#F6F6F6',
});

export const IconContainer = styled.View({
  width: '100%',
  height: '100%',
  flexDirection: 'column-reverse',
  direction: 'rtl',
  paddingVertical: 16,
  paddingHorizontal: 15,
});
