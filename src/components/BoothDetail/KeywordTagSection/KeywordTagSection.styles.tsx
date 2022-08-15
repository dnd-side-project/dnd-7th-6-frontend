import styled from '@emotion/native';

import {SubHeadline2} from 'src/components/utils/Text';
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
  marginVertical: heightPercentage(13.5),
});

export const KeywordWrapper = styled.View({
  marginBottom: heightPercentage(8),
});

export const Headline = styled(SubHeadline2)({
  color: theme.colors.grayscale[10],
});
