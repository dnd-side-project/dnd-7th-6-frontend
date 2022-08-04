import styled from '@emotion/native';

import {SubHeadline3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const SearchListWrapper = styled.View({
  width: '100%',
  height: heightPercentage(72),
  backgroundColor: 'yellow',
});

export const SearchPlaceName = styled(SubHeadline3)({
  color: theme.colors.grayscale[10],
  marginLeft: widthPercentage(16),
});
