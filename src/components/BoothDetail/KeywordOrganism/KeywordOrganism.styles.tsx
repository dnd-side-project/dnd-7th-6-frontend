import styled from '@emotion/native';

import {BodyText4, SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingHorizontal: widthPercentage(18),
  paddingVertical: heightPercentage(18),
});

export const TextContainer = styled.View({
  justifyContent: 'space-between',
  flexDirection: 'row',
});

export const KeywordContainer = styled.View({
  height: heightPercentage(222),
  justifyContent: 'space-between',
  marginVertical: heightPercentage(13.5),
});

export const ButtonWrapper = styled.View({
  paddingVertical: heightPercentage(6),
});

export const Headline = styled(SubHeadline2)({
  color: theme.colors.grayscale[10],
});

export const NumOfKeyword = styled(SubHeadline2)({
  color: theme.colors.grayscale[7],
});

export const ReviewWriteLink = styled(BodyText4)({
  textDecorationLine: 'underline',
  color: theme.colors.grayscale[7],
  alignSelf: 'flex-end',
});
