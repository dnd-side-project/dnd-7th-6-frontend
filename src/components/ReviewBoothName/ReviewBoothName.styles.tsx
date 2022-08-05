import styled from '@emotion/native';

import {BodyText3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const TextnIconWrapper = styled.View({
  marginTop: heightPercentage(18),
  marginLeft: heightPercentage(16),
  flexDirection: 'row',
});

export const BoothNameText = styled(BodyText3)({
  color: theme.colors.grayscale[7],
  marginLeft: widthPercentage(4),
});
