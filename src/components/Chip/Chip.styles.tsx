import styled from '@emotion/native';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {Props} from './Chip';

import {fontPercentage, heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export type Mode = 'bright' | 'dark';

export type ChipTheme = {
  [mode in Mode]: StyleProp<ViewStyle>;
};

export type ChipTextTheme = {
  [mode in Mode]: StyleProp<TextStyle>;
};

export const chipTheme: ChipTheme = {
  bright: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.grayscale[3],
  },
  dark: {
    backgroundColor: theme.colors.grayscale[6],
  },
};

export const chipTextTheme: ChipTextTheme = {
  bright: {
    color: theme.colors.grayscale[7],
  },
  dark: {
    color: theme.colors.grayscale[10],
  },
};

export const Container = styled.Pressable<Props>({
  alignSelf: 'flex-start',
  borderRadius: 6,
  paddingVertical: heightPercentage(6),
  paddingHorizontal: widthPercentage(10),
});

export const ChipText = styled.Text<Props>({
  fontSize: fontPercentage(14),
});
