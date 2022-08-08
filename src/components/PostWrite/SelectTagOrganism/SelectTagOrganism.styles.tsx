import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  height: heightPercentage(60),
  paddingHorizontal: widthPercentage(16),
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  borderColor: theme.colors.grayscale[2],
  borderTopWidth: 1,
  borderBottomWidth: 1,
});

export const Label = styled(SubHeadline2)({
  color: theme.colors.grayscale[9],
});

export const style = StyleSheet.create({
  RightArrow: {
    alignSelf: 'center',
  },
});
