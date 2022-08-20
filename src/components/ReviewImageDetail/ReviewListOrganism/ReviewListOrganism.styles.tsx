import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const OrderSection = styled.View({
  borderColor: theme.colors.grayscale[3],
  borderTopWidth: 0.5,
  height: heightPercentage(44),
  paddingHorizontal: widthPercentage(16),
  flexDirection: 'row',
  alignItems: 'center',
});

export const ScrollUpWrapper = styled.View({
  position: 'absolute',
  top: heightPercentage(600),
  right: widthPercentage(20),
});
