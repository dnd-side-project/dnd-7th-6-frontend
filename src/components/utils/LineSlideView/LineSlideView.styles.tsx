import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {SubHeadline3} from '../Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

interface Props {
  selected: boolean;
}

export const Container = styled.View({
  height: '100%',
});

export const Navigator = styled.View({
  flexDirection: 'row',
});

export const Button = styled.Pressable({
  paddingHorizontal: widthPercentage(16),
  paddingVertical: heightPercentage(14),
  justifyContent: 'center',
  flexDirection: 'row',
  width: '50%',
});

export const ButtonTitle = styled(SubHeadline3)<Props>(({selected}) => ({
  color: selected ? theme.colors.grayscale[10] : theme.colors.grayscale[5],
  marginHorizontal: widthPercentage(2),
}));

export const OuterSlider = styled.View({
  width: '100%',
  height: heightPercentage(3),
  backgroundColor: theme.colors.grayscale[2],
});

export const style = StyleSheet.create({
  innerSlider: {
    width: '50%',
    height: heightPercentage(3),
    backgroundColor: theme.colors.grayscale[7],
  },
});
