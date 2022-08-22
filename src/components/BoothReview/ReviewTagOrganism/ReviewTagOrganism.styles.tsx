import styled from '@emotion/native';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const ReviewNextPressableWrapper = styled.View({
  flexDirection: 'column-reverse',
  marginBottom: heightPercentage(10),
  width: '100%',
  alignSelf: 'center',
});

export const BackgroundPressableWrapper = styled.View({
  backgroundColor: theme.colors.grayscale[1],
  width: '100%',
  position: 'absolute',
  bottom: 0,
});
