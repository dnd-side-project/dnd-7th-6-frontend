import styled from '@emotion/native';

import {SubHeadline3} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  height: heightPercentage(48),
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const BackButtonWrapper = styled.View({
  position: 'absolute',
  left: widthPercentage(12),
});

export const MenuButtonWrapper = styled.View({
  position: 'absolute',
  right: widthPercentage(12),
});

export const DropdownWrapper = styled.View({
  position: 'absolute',
  right: widthPercentage(16),
  top: heightPercentage(40),
  zIndex: 10,
});

export const Title = styled(SubHeadline3)({
  color: theme.colors.grayscale[9],
});
