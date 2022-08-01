import styled from '@emotion/native';

import {BodyText5, BodyText6, SubHeadline2} from '../utils/Text';

import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  paddingVertical: heightPercentage(16),
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const DescriptionContainer = styled.View({});

export const TagContainer = styled.View({
  flexDirection: 'row',
});

export const ImageContainer = styled.View({});

export const Title = styled(SubHeadline2)({
  color: theme.colors.grayscale[9],
});

export const Distance = styled(BodyText5)({
  color: theme.colors.grayscale[7],
});

export const Review = styled(BodyText6)({
  color: theme.colors.grayscale[7],
});
