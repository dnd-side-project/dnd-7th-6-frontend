import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ReviewBoothName from '../ReviewBoothName';
import ReviewNextPressable from '../ReviewNextPressable';
import {
  BoothEditPressable,
  BoothQuestionDescription,
  BoothSpecificDescription,
  QuestionWrapper,
  ResultFlatList,
  ResultListWrapper,
  ReviewNextPressableWrapper,
  ReviewSectionContainer,
  RightCountView,
  TagInputDescription,
  TagInputPressable,
  TagInputText,
  TagInputWrapper,
  TagScrollView,
  TagsWrapper,
} from './ReviewResultOrganism.styles';

import ReviewSelectPressable from 'src/components/BoothReview/ReviewSelectPressable';
import TagInputChip from 'src/components/Chip/TagInputChip';
import useGetReviewTag from 'src/querys/useGetReviewTag';
import {changeResultTags} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';
import {PostReviewParamList} from 'src/screens/BoothScreen/PostReviewScreen';
const ReviewResultOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data} = useGetReviewTag();
  const route = useRoute<RouteProp<PostReviewParamList, 'BoothResultReviewScreen'>>();
  const {placeName} = route.params;
  const resultTags = useSelector((state: RootState) => state.reviewReducer.resultTags);
  const resultNext = useSelector((state: RootState) => state.reviewReducer.resultNext);
  const tagData: string[] = useSelector((state: RootState) => state.reviewReducer.tagData);

  const tagOnPress = (id: number) => () => {
    dispatch(changeResultTags(id));
  };
  const nextOnPress = () => navigation.navigate('BoothImageReview' as never, {} as never);
  const tagPageOnPress = () => navigation.navigate('BoothTagInput' as never, {} as never);

  return (
    <ReviewSectionContainer>
      <ReviewBoothName>{placeName}</ReviewBoothName>

      <QuestionWrapper>
        <BoothQuestionDescription>결과물 사진은 어떻게 나왔나요?</BoothQuestionDescription>
        <BoothSpecificDescription>(최대 4개)</BoothSpecificDescription>
      </QuestionWrapper>
      <ResultListWrapper>
        <ResultFlatList
          scrollEnabled={true}
          data={data?.reviewTagMap.PHOTO_CONDITION}
          numColumns={2}
          bounces={false}
          renderItem={({item}: any) => {
            return (
              <ReviewSelectPressable
                selected={resultTags[item.id]}
                onPress={tagOnPress(item.id)}
                imageUrl={item.tagIconImageUrl}>
                {item.title}
              </ReviewSelectPressable>
            );
          }}
        />
      </ResultListWrapper>

      <TagInputWrapper>
        <TagsWrapper>
          <TagInputDescription>태그를 직접 남겨보세요</TagInputDescription>
          <BoothSpecificDescription>(최대 4개)</BoothSpecificDescription>
          {tagData.length > 0 && (
            <BoothEditPressable onPress={tagPageOnPress}>수정</BoothEditPressable>
          )}
        </TagsWrapper>

        <TagInputPressable onTouchStart={tagData.length > 0 ? () => {} : tagPageOnPress}>
          {tagData.length > 0 ? (
            <TagScrollView horizontal>
              {tagData.map((item: any, index: number) => {
                return (
                  <TagInputChip active key={index} index={index}>
                    {item}
                  </TagInputChip>
                );
              })}
            </TagScrollView>
          ) : (
            <TagInputText>태그를 입력해주세요</TagInputText>
          )}
          <RightCountView>{tagData.length}/4</RightCountView>
        </TagInputPressable>
      </TagInputWrapper>
      <ReviewNextPressableWrapper>
        <ReviewNextPressable onPress={nextOnPress} disable={!resultNext} />
      </ReviewNextPressableWrapper>
    </ReviewSectionContainer>
  );
};

export default ReviewResultOrganism;
