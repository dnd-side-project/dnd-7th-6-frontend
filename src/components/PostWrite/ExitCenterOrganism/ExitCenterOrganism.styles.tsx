import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {Headline3} from 'src/components/utils/Text';
import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingBottom: heightPercentage(184),
  paddingTop: heightPercentage(88),
  alignItems: 'center',
});

export const Headline = styled(Headline3)({
  textAlign: 'center',
  paddingTop: heightPercentage(16),
  color: theme.colors.grayscale[9],
});

export const Style = StyleSheet.create({
  fastImage: {
    height: heightPercentage(230),
    width: heightPercentage(345),
  },
});
