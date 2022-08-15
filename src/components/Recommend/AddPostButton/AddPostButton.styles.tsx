import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Button = styled.Pressable({
  backgroundColor: theme.colors.grayscale[9],
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 90,
  width: widthPercentage(52),
  height: widthPercentage(52),
  position: 'absolute',
  right: widthPercentage(16),
  top: heightPercentage(590),
});
