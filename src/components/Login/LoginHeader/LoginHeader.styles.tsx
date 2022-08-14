import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  height: heightPercentage(48),
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const BackButtonWrapper = styled.View({
  position: 'absolute',
  right: widthPercentage(12),
});

export const Title = styled(SubHeadline3)({
  color: theme.colors.grayscale[9],
});
