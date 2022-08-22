import styled from '@emotion/native';

import {SubHeadline4} from '../Text/SubHeadline';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  backgroundColor: 'rgba(25, 25, 25, 0.7)',
  paddingVertical: heightPercentage(8),
  paddingHorizontal: widthPercentage(16),
  position: 'absolute',
  top: heightPercentage(122),
  borderRadius: 4,
  zIndex: 1000,
  alignSelf: 'center',
});

export const Content = styled(SubHeadline4)({
  color: theme.colors.grayscale[1],
  width: widthPercentage(231),
  textAlign: 'center',
});
