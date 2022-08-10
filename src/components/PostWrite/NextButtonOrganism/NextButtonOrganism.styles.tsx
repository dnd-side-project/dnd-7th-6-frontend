import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  backgroundColor: theme.colors.grayscale[0],
  paddingHorizontal: widthPercentage(16),
  paddingBottom: heightPercentage(64),
  width: '100%',
  bottom: 0,
  shadowColor: '#000',
  shadowOpacity: 0.02,
  shadowOffset: {width: 0, height: -4},
  shadowRadius: 4,
  elevation: 10,
});

export const ProgressBarWrapper = styled.View({
  paddingVertical: heightPercentage(16),
});
