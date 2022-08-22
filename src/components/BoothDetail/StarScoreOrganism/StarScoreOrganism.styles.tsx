import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {Headline1, SubHeadline3} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const style = StyleSheet.create({
  fastImage: {
    height: heightPercentage(186),
    paddingVertical: heightPercentage(16),
    paddingHorizontal: widthPercentage(16),
    backgroundColor: theme.colors.grayscale[2],
  },
});

export const StarScoreBox = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: widthPercentage(162),
  left: widthPercentage(30),
  top: heightPercentage(32),
});

export const StarScore = styled(Headline1)({
  color: theme.colors.grayscale[2],
  paddingHorizontal: widthPercentage(2),
});

export const StarDescription = styled(SubHeadline3)({
  color: theme.colors.grayscale[1],
});
