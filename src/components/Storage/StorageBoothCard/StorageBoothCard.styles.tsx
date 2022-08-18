import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

import {BodyText3, BodyText5, BodyText6} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const FeedCardContainer = styled.Pressable({
  marginHorizontal: widthPercentage(5.5),
  marginVertical: heightPercentage(16),
});

export const ImageContainer = styled.Pressable({
  width: widthPercentage(166),
  height: widthPercentage(166),
  backgroundColor: '#F6F6F6',
  borderRadius: 4,
  marginBottom: heightPercentage(8),
});

export const IconContainer = styled.View({
  position: 'absolute',
  height: '100%',
  alignSelf: 'flex-end',
  justifyContent: 'flex-end',
  paddingVertical: heightPercentage(16),
  paddingHorizontal: widthPercentage(15),
  borderColor: 'black',
  zIndex: 5,
});

export const BoothTitle = styled(BodyText3)({
  color: theme.colors.grayscale[9],
  width: widthPercentage(166),
});

export const StarNReviewCountWrapper = styled.View({
  width: widthPercentage(166),
  flexDirection: 'row',
  marginTop: heightPercentage(2),
  alignItems: 'center',
});

export const StarScoreText = styled(BodyText5)({
  color: theme.colors.grayscale[8],
  marginLeft: widthPercentage(2),
});

export const ReviewCountText = styled(BodyText6)({
  color: theme.colors.grayscale[6],
  marginLeft: widthPercentage(5),
});

export const styles = StyleSheet.create({
  photoStyle: {
    borderRadius: 4,
    flex: 1,
    zIndex: 2,
  },
});
