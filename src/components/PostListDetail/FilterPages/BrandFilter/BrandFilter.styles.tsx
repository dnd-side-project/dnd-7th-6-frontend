import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  paddingTop: heightPercentage(12),
  paddingHorizontal: widthPercentage(16),
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const ChipWrapper = styled.View({
  marginRight: widthPercentage(8),
  marginTop: heightPercentage(10),
});
