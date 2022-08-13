import styled from '@emotion/native';

import {BodyText3, BodyText4, SubHeadline2} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const ReviewSectionContainer = styled.View({
  width: '100%',
  height: '100%',
});

export const CameranImageWrapper = styled.ScrollView({
  height: heightPercentage(90),
  marginTop: heightPercentage(14),
  marginBottom: heightPercentage(64),
  flexGrow: 0,
});

export const SubtitleBooth = styled(BodyText3)({
  color: theme.colors.grayscale[5],
  marginLeft: widthPercentage(16),
  marginBottom: heightPercentage(32),
});

export const ImageWrapper = styled.View({
  borderRadius: 8,
  height: heightPercentage(90),
  width: heightPercentage(90),
  backgroundColor: theme.colors.grayscale[2],
  marginLeft: widthPercentage(6),
});

export const DeletePressable = styled.Pressable({
  height: heightPercentage(18),
  width: heightPercentage(18),
  position: 'absolute',
  zIndex: 1,
  right: '6.67%',
  top: '6.67%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.grayscale[3],
  borderRadius: 100,
});

export const BoothDescribeWrapper = styled.View({
  flexDirection: 'row',
  marginLeft: widthPercentage(16),
});

export const BoothSelectTitle = styled(BodyText3)({
  color: theme.colors.grayscale[5],
  marginLeft: widthPercentage(4),
});

export const BoothDescribeTitle = styled(SubHeadline2)({
  color: theme.colors.grayscale[8],
  marginBottom: heightPercentage(16),
});

export const BoothDescribeTextLengthText = styled(BodyText4)({
  color: theme.colors.grayscale[5],
  marginTop: heightPercentage(8),
  marginRight: heightPercentage(16),
  alignSelf: 'flex-end',
});

export const ReviewNextPressableWrapper = styled.View({
  flexDirection: 'column-reverse',
  marginTop: heightPercentage(10),
  marginBottom: heightPercentage(10),
  alignSelf: 'center',
  flex: 1,
});

export const ReviewTextInput = {
  color: theme.colors.grayscale[8],
  fontFamily: theme.fonts.Body[4].fontFamily,
  fontSize: theme.fonts.Body[4].size,
};
