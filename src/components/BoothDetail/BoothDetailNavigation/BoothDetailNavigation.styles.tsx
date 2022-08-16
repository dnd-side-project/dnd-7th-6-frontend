import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  backgroundColor: theme.colors.grayscale[0],
  zIndex: 10,
});

export const Button = styled.Pressable({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(14),
  justifyContent: 'center',
  flexDirection: 'row',
  width: '33.33%',
});

export const style = StyleSheet.create({
  slider: {
    width: '33.33%',
    height: heightPercentage(3),
    backgroundColor: theme.colors.grayscale[7],
  },
});
