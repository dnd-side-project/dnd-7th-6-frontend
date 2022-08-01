import styled from '@emotion/native';

import {BodyText6} from '../utils/Text';
import {Props} from './RoundChip';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

const colorMap = {
  dark: theme.colors.grayscale[8],
  gray: theme.colors.grayscale[2],
  bright: theme.colors.grayscale[1],
};

const fontColorMap = {
  dark: theme.colors.grayscale[1],
  gray: theme.colors.grayscale[7],
  bright: theme.colors.grayscale[7],
};

export const Container = styled.Pressable<Props>(({mode}) => ({
  height: heightPercentage(30),
  paddingVertical: heightPercentage(6),
  paddingHorizontal: heightPercentage(8),
  alignSelf: 'flex-start',
  textAlignVertical: 'center',
  backgroundColor: colorMap[mode || 'dark'],
  borderRadius: 20,
  borderColor: theme.colors.grayscale[3],
  borderWidth: mode === 'bright' ? 1 : 0,
}));

export const ChipText = styled(BodyText6)<Props>(({mode}) => ({
  color: fontColorMap[mode || 'dark'],
}));
