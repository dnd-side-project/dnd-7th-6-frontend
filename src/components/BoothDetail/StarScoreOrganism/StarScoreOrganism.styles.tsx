import styled from '@emotion/native';

import {BodyText1, Headline1} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
  backgroundColor: theme.colors.grayscale[2],
});

export const StarContainer = styled.View({
  paddingLeft: widthPercentage(29),
  paddingTop: heightPercentage(40),
  paddingBottom: heightPercentage(31),
  alignSelf: 'flex-start',
});

export const StarScoreBox = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StarScore = styled(Headline1)({
  color: theme.colors.primary[1].dark,
  paddingHorizontal: widthPercentage(2),
});

export const StarDescription = styled(BodyText1)({
  color: theme.colors.grayscale[7],
});
