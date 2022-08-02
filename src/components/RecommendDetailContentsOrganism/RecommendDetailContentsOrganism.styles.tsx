import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  paddingVertical: heightPercentage(31),
  paddingHorizontal: widthPercentage(18),
  backgroundColor: 'white',
});

export const ChipWrapper = styled.View({
  paddingVertical: heightPercentage(8),
  flexWrap: 'wrap',
  flexDirection: 'row',
});

export const ChipContainer = styled.View({
  paddingRight: widthPercentage(8),
  paddingTop: heightPercentage(8),
});
