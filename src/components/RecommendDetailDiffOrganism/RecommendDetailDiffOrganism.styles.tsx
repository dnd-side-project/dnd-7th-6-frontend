import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
});

export const CardWrapper = styled.View({
  paddingVertical: heightPercentage(16),
  marginRight: widthPercentage(11),
});
