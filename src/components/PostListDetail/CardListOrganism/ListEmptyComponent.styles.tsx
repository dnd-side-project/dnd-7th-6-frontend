import styled from '@emotion/native';

import {BodyText4, SubHeadline1} from 'src/components/utils/Text';
import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  height: heightPercentage(400),
});

export const Headline = styled(SubHeadline1)({
  color: theme.colors.grayscale[9],
  marginVertical: heightPercentage(10),
});

export const SubHeadline = styled(BodyText4)({
  color: theme.colors.grayscale[7],
  textAlign: 'center',
});
