import styled from '@emotion/native';

import {heightPercentage, widthPercentage} from 'src/utils/ScreenResponse';

export const SquareCard = styled.View({
  width: widthPercentage(84),
  height: heightPercentage(84),
  borderRadius: 12,
  backgroundColor: '#F6F6F6',
});
