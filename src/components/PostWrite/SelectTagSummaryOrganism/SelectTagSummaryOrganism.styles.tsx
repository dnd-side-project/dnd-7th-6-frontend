import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const ChipWrapper = styled.View({
  marginBottom: heightPercentage(8),
  marginRight: widthPercentage(6),
  alignSelf: 'flex-start',
});

export const ChipContainer = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
});
