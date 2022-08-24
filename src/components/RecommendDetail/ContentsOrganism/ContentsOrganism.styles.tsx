import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  paddingVertical: heightPercentage(14),
  paddingHorizontal: widthPercentage(16),
  backgroundColor: 'white',
});

export const ChipWrapper = styled.View({
  flexWrap: 'wrap',
  flexDirection: 'row',
});

export const ChipContainer = styled.View({
  paddingRight: widthPercentage(8),
  paddingBottom: heightPercentage(8),
});
