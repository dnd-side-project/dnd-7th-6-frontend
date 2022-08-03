import styled from '@emotion/native';

import {BodyText1} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(14),
  backgroundColor: theme.colors.grayscale[2],
  borderRadius: 8,
});

export const TextWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const Keyword = styled(BodyText1)({
  color: theme.colors.grayscale[8],
});

export const Count = styled(BodyText1)({
  color: theme.colors.grayscale[10],
});
