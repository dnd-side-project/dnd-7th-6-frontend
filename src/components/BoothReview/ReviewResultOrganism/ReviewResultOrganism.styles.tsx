import styled from '@emotion/native';

import {SubHeadline3, BodyText3, BodyText4, SubHeadline2} from 'src/components/utils/Text';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const ReviewSectionContainer = styled.View({
  width: '100%',
  flex: 1,
});

export const QuestionWrapper = styled.View({
  flexDirection: 'row',
  marginLeft: widthPercentage(16),
  marginTop: widthPercentage(40),
});

export const BoothQuestionDescription = styled(SubHeadline2)({
  color: theme.colors.grayscale[8],
  marginBottom: heightPercentage(16),
});

export const BoothSpecificDescription = styled(BodyText3)({
  color: theme.colors.grayscale[5],
  marginLeft: widthPercentage(4),
});

export const BoothEditPressable = styled(BodyText3)({
  color: theme.colors.grayscale[7],
  textDecorationLine: 'underline',
  position: 'absolute',
  right: widthPercentage(25),
});

export const TagInputWrapper = styled.View({
  marginTop: widthPercentage(60),
});

export const TagsWrapper = styled.View({
  flexDirection: 'row',
  marginLeft: widthPercentage(16),
});

export const TagInputDescription = styled(SubHeadline3)({
  color: theme.colors.grayscale[8],
});

export const TagInputPressable = styled.View({
  marginLeft: widthPercentage(16),
  marginTop: heightPercentage(18),
  backgroundColor: theme.colors.grayscale[2],
  justifyContent: 'center',
  width: widthPercentage(343),
  height: heightPercentage(48),
  paddingVertical: heightPercentage(4),
  borderRadius: 8,
});

export const ResultListWrapper = styled.View({
  height: heightPercentage(200),
});

export const ResultFlatList = styled.FlatList({
  marginLeft: widthPercentage(10),
});

export const TagInputText = styled(BodyText4)({
  marginLeft: widthPercentage(12),
  color: theme.colors.grayscale[5],
});

export const TagScrollView = styled.ScrollView({
  width: widthPercentage(308),
});

export const ReviewNextPressableWrapper = styled.View({
  position: 'absolute',
  alignSelf: 'center',
  bottom: heightPercentage(10),
});

export const RightCountView = styled(BodyText3)({
  position: 'absolute',
  color: theme.colors.grayscale[6],
  right: widthPercentage(12),
  alignSelf: 'center',
  justifyContent: 'center',
});
