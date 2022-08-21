import styled from '@emotion/native';

import {Headline1, SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
  backgroundColor: theme.colors.grayscale[2],
});

export const StarContainer = styled.View({
  paddingLeft: widthPercentage(57),
  paddingTop: heightPercentage(40),
  paddingBottom: heightPercentage(40),
  alignSelf: 'flex-start',
});

export const StarScoreBox = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StarScore = styled(Headline1)({
  color: theme.colors.grayscale[1],
  paddingHorizontal: widthPercentage(2),
});

export const StarDescription = styled(SubHeadline3)({
  color: theme.colors.grayscale[1],
});
