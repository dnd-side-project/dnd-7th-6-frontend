import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  paddingBottom: heightPercentage(14),
  paddingTop: heightPercentage(6),
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.grayscale[2],
});

export const ChipWrapper = styled.View({
  marginRight: widthPercentage(8),
});
