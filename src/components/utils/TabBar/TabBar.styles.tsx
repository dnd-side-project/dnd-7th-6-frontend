import styled from '@emotion/native';

import {BodyText5} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  flexDirection: 'row',
  height: heightPercentage(56),
});

export const TabWrapper = styled.Pressable(({isFocused}: {isFocused: boolean}) => ({
  borderTopColor: theme.colors.primary[1].normal,
  borderTopWidth: isFocused ? heightPercentage(3) : 0,
  marginHorizontal: widthPercentage(18),
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const IconWrapper = styled.View({
  width: widthPercentage(24),
  height: widthPercentage(24),
});

export const BottomBarTitle = styled(BodyText5)(({isFocused}: {isFocused: boolean}) => ({
  color: isFocused ? theme.colors.primary[1].normal : theme.colors.grayscale[5],
}));
