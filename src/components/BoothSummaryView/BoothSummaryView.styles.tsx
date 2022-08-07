import styled from '@emotion/native';

import {BodyText5, BodyText6, SubHeadline2} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const Container = styled.Pressable({
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: heightPercentage(18),
  paddingTop: heightPercentage(16),
  paddingHorizontal: widthPercentage(16),
  height: heightPercentage(118),
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.grayscale[2],
});

export const DescriptionContainer = styled.View({});

export const TagContainer = styled.View({
  flexDirection: 'row',
  paddingVertical: heightPercentage(4),
});

export const ImageContainer = styled.View({});

export const ChipWrapper = styled.View({
  paddingRight: widthPercentage(4),
});

export const Title = styled(SubHeadline2)({
  color: theme.colors.grayscale[9],
});

export const SubText = styled.Text({
  marginVertical: heightPercentage(4),
});

export const Distance = styled(BodyText5)({
  color: theme.colors.grayscale[7],
});

export const Review = styled(BodyText6)({
  color: theme.colors.grayscale[7],
});
