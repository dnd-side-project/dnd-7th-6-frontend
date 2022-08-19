import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {BodyText3, SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(18),
  paddingVertical: heightPercentage(18),
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

export const TotalPhoto = styled(BodyText3)({
  color: theme.colors.grayscale[8],
});

export const GridView = styled.View({
  width: widthPercentage(343),
  height: heightPercentage(230),
  flexWrap: 'wrap',
  flexDirection: 'row',
});

export const style = StyleSheet.create({
  fastImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.grayscale[3],
    height: widthPercentage(111),
    width: widthPercentage(111),
    marginRight: widthPercentage(3),
    marginTop: widthPercentage(3),
  },
});
