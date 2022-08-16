import styled from '@emotion/native';

import {SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.View({
  paddingVertical: heightPercentage(24),
});

export const TextContainer = styled.Text({
  paddingVertical: heightPercentage(8),
  paddingHorizontal: widthPercentage(16),
});

export const Headline = styled(SubHeadline2)({
  color: theme.colors.grayscale[10],
});

export const Count = styled(SubHeadline2)({
  color: theme.colors.grayscale[7],
});

export const ReviewContainer = styled.View({
  paddingVertical: heightPercentage(8),
});

export const ButtonWrapper = styled.View({
  paddingVertical: heightPercentage(24),
  paddingHorizontal: widthPercentage(16),
});
