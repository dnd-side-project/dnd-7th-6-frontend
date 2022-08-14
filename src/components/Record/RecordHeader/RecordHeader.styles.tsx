import styled from '@emotion/native';

import {Headline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const HeaderContainer = styled.View({
  width: '100%',
  justifyContent: 'center',
  height: heightPercentage(54),
});

export const HeaderTitle = styled(Headline2)({
  color: theme.colors.grayscale[10],
  marginLeft: widthPercentage(16),
});

export const IconContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'absolute',
  right: widthPercentage(12),
});

export const SpecIconWrapper = styled.View({
  marginLeft: widthPercentage(15),
});
