import styled from '@emotion/native';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export type Mode = 'bright' | 'dark' | 'invisible';

export type PressableContainerTheme = {
  [mode in Mode]: StyleProp<ViewStyle>;
};

export type PressableAdditionTextTheme = {
  [mode in Mode]: StyleProp<TextStyle>;
};

export const pressableContainerTheme: PressableContainerTheme = {
  bright: {
    borderColor: theme.colors.grayscale[3],
    borderStyle: 'solid',
  },
  dark: {
    backgroundColor: theme.colors.grayscale[9],
  },
  invisible: {
    backgroundColor: theme.colors.grayscale[2],
    borderWidth: 0,
  },
};

export const pressableAdditionTextTheme: PressableAdditionTextTheme = {
  bright: {
    color: theme.colors.grayscale[8],
  },
  dark: {
    color: theme.colors.grayscale[2],
  },
  invisible: {
    color: theme.colors.grayscale[6],
  },
};

export const Container = styled.Pressable({
  alignSelf: 'flex-start',
  width: widthPercentage(343),
  height: heightPercentage(48),
  alignItems: 'center',
  borderWidth: 1,
  borderRadius: 8,
  justifyContent: 'center',
});

export const PressableAdditionText = styled.Text({
  color: theme.colors.grayscale[8],
  fontFamily: theme.fonts.Body[2].fontFamily,
  lineHeight: theme.fonts.Body[2].lineHeight,
  fontSize: theme.fonts.Body[2].size,
  display: 'flex',
});
