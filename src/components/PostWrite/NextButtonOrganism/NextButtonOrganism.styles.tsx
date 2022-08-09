import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  position: 'absolute',
  bottom: 0,
  height: heightPercentage(116),
  width: '100%',
  backgroundColor: theme.colors.grayscale[0],
});

export const ProgressBarWrapper = styled.View({
  paddingVertical: heightPercentage(12),
  marginBottom: heightPercentage(4),
});
