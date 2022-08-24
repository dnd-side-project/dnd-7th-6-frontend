import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const HeaderContainer = styled.View({
  width: '100%',
  height: heightPercentage(48),
  backgroundColor: theme.colors.grayscale[1],
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const IconWrapper = styled.View({
  left: widthPercentage(12),
  position: 'absolute',
});

export const HeaderTitle = styled(SubHeadline3)({
  color: theme.colors.grayscale[9],
});
