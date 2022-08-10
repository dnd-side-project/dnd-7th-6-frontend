import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  backgroundColor: theme.colors.grayscale[0],
  paddingHorizontal: widthPercentage(16),
  height: heightPercentage(116),
  position: 'absolute',
  width: '100%',
  top: heightPercentage(618),
});

export const ProgressBarWrapper = styled.View({
  paddingVertical: heightPercentage(12),
  marginBottom: heightPercentage(4),
});
