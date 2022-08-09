import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  bottom: heightPercentage(64),
  position: 'absolute',
  width: '100%',
});
