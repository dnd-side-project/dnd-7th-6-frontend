import styled from '@emotion/native';

import {BodyText3, SubHeadline2, SubHeadline3} from '../utils/Text';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

export const ReviewSectionContainer = styled.View({
  width: '100%',
  height: '100%',
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

export const TagInputWrapper = styled.View({
  marginLeft: widthPercentage(16),
  marginTop: widthPercentage(62),
});

export const TagInputDescription = styled(SubHeadline3)({
  color: theme.colors.grayscale[8],
});
export const TagInputPressable = styled.Pressable({
  marginTop: heightPercentage(18),
  backgroundColor: theme.colors.grayscale[2],
  width: widthPercentage(343),
  height: heightPercentage(40),
  borderRadius: 8,
});

export const ResultListWrapper = styled.View({
  height: heightPercentage(200),
});

export const ResultFlatList = styled.FlatList({
  marginLeft: widthPercentage(10),
});

export const ReviewNextPressableWrapper = styled.View({
  position: 'absolute',
  alignSelf: 'center',
  bottom: heightPercentage(10),
});
