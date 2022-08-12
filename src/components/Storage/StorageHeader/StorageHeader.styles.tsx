import styled from '@emotion/native';

import {Headline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(16),
  paddingBottom: heightPercentage(35),
  paddingTop: heightPercentage(40),
});

export const Headline = styled(Headline2)({
  color: theme.colors.grayscale[10],
  paddingVertical: heightPercentage(8),
});
