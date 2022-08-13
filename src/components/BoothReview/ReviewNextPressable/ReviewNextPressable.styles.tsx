import styled from '@emotion/native';

import {SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  disable: boolean;
}

export const ReviewNextPressableContainer = styled.Pressable(({disable}: Props) => ({
  width: widthPercentage(343),
  height: heightPercentage(48),
  backgroundColor: disable ? theme.colors.grayscale[3] : '#8048F8',
  borderRadius: 8,
  alignSelf: 'center',
  justifyContent: 'center',
}));

export const ReviewNextPressableText = styled(SubHeadline3)(({disable}: Props) => ({
  color: disable ? theme.colors.grayscale[6] : theme.colors.grayscale[2],
  alignSelf: 'center',
}));
