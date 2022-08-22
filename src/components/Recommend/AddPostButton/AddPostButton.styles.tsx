import styled from '@emotion/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Button = styled.Pressable({
  backgroundColor: theme.colors.grayscale[10],
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 90,
  width: widthPercentage(52),
  height: widthPercentage(52),
  position: 'absolute',
  right: widthPercentage(16),
  top: heightPercentage(590) + getStatusBarHeight(true),
  elevation: 3,
  shadowOffset: {width: 0, height: 8},
  shadowRadius: 16,
  shadowColor: 'rgba(0, 0, 0, 0.12)',
});
