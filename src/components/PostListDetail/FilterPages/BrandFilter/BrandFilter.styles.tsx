import styled from '@emotion/native';

import {widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  paddingLeft: widthPercentage(16),
  paddingRight: widthPercentage(90),
  flexDirection: 'row',
  flexWrap: 'wrap',
});
