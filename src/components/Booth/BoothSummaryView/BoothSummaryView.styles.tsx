import styled from '@emotion/native';

import {SubHeadline3, BodyText4, BodyText5, BodyText6} from 'src/components/utils/Text';
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

export const TitlenIconWrapper = styled.View({
  flexDirection: 'row',
});

export const IconConatiner = styled.Image({
  height: heightPercentage(32),
  width: heightPercentage(32),
  resizeMode: 'contain',
  marginRight: widthPercentage(6),
});

export const TagContainer = styled.View({
  flexDirection: 'row',
  paddingVertical: heightPercentage(4),
});

export const ImageContainer = styled.View({
  backgroundColor: theme.colors.grayscale[3],
  height: heightPercentage(76),
  width: heightPercentage(76),
  borderRadius: 4,
});

export const ReviewCountContainer = styled.View({
  backgroundColor: theme.colors.grayscale[10],
  height: heightPercentage(22),
  width: heightPercentage(38),
  borderRadius: 4,
  opacity: 0.8,
  bottom: 0,
  right: 0,
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ChipWrapper = styled.View({
  paddingRight: widthPercentage(4),
});

export const Title = styled(SubHeadline3)({
  color: theme.colors.grayscale[9],
});

export const SubText = styled.View({
  marginVertical: heightPercentage(4),
  alignItems: 'center',
  flexGrow: 0,
  flexDirection: 'row',
});

export const Distance = styled(BodyText4)({
  color: theme.colors.grayscale[7],
});

export const Rating = styled(BodyText6)({
  color: theme.colors.grayscale[7],
  marginLeft: widthPercentage(4),
});

export const ReviewCount = styled(BodyText5)({
  color: theme.colors.grayscale[1],
});
