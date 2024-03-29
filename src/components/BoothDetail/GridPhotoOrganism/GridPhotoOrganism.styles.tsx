import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {BodyText1, SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(18),
  paddingVertical: heightPercentage(42),
});

export const TextContainer = styled.Text({
  paddingVertical: heightPercentage(16),
});

export const Headline = styled(SubHeadline2)({
  color: theme.colors.grayscale[10],
});

export const Count = styled(SubHeadline2)({
  color: theme.colors.grayscale[7],
});

export const ButtonWrapper = styled.View({
  paddingVertical: heightPercentage(24),
});

export const TotalPhoto = styled(BodyText1)({
  color: theme.colors.grayscale[1],
});

export const GridView = styled.Pressable({
  width: widthPercentage(343),
  height: heightPercentage(230),
  flexWrap: 'wrap',
  flexDirection: 'row',
});

export const OpacityView = styled.View({
  height: widthPercentage(111),
  width: widthPercentage(111),
  backgroundColor: theme.colors.grayscale[10] + '88',
  right: widthPercentage(3),
  bottom: heightPercentage(0),
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
});

export const style = StyleSheet.create({
  fastImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.grayscale[10],
    height: widthPercentage(111),
    width: widthPercentage(111),
    marginRight: widthPercentage(3),
    marginTop: widthPercentage(3),
  },
});
