import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/utils/ScreenResponse';

export const FeedCardContainer = styled.View({
  width: widthPercentage(164),
  height: heightPercentage(220),
  borderRadius: 12,
  backgroundColor: '#F6F6F6',
});

export const IconContainer = styled.View({
  height: '100%',
  alignSelf: 'flex-end',
  justifyContent: 'flex-end',
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(15),
});
