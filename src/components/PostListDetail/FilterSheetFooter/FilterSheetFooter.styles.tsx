import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  flexDirection: 'row',
  paddingVertical: heightPercentage(4),
  paddingHorizontal: widthPercentage(16),
  alignItems: 'center',
  marginBottom: heightPercentage(16),
});

export const RefreshWrapper = styled.Pressable({
  paddingVertical: heightPercentage(12),
  paddingHorizontal: widthPercentage(12),
});
