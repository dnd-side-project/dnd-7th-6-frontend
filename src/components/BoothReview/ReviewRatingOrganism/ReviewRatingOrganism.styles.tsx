import styled from '@emotion/native';

import {BodyText3, BodyText4, SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const ReviewSectionContainer = styled.View({
  width: '100%',
  flex: 1,
});

export const RatingnTextWrapper = styled.View({
  justifyContent: 'center',
  marginTop: heightPercentage(40),
  marginLeft: heightPercentage(16),
  marginBottom: heightPercentage(62),
});
export const BoothRatingText = styled(BodyText4)({
  color: theme.colors.grayscale[7],
  marginTop: heightPercentage(14),
  alignSelf: 'center',
});

export const BoothRatingDescription = styled(SubHeadline2)({
  color: theme.colors.grayscale[8],
  marginBottom: heightPercentage(16),
});

export const SpecificWrapper = styled.View({
  flexDirection: 'row',
  marginLeft: widthPercentage(16),
});

export const BoothSpecificDescription = styled(BodyText3)({
  color: theme.colors.grayscale[5],
  marginLeft: widthPercentage(4),
});

export const SpecificListWrapper = styled.View({
  height: heightPercentage(250),
});

export const SpecificFlatList = styled.FlatList({
  marginLeft: widthPercentage(10),
});

export const ReviewNextPressableWrapper = styled.View({
  bottom: heightPercentage(10),
  alignSelf: 'center',
  position: 'absolute',
});
