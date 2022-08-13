import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ReviewBoothName from '../ReviewBoothName';
import ReviewNextPressable from '../ReviewNextPressable';
import ReviewSelectPressable from '../ReviewSelectPressable';
import {
  BoothQuestionDescription,
  BoothSpecificDescription,
  QuestionWrapper,
  ResultFlatList,
  ResultListWrapper,
  ReviewNextPressableWrapper,
  ReviewSectionContainer,
  TagInputDescription,
  TagInputPressable,
  TagInputText,
  TagInputWrapper,
  TagsWrapper,
} from './ReviewResultOrganism.styles';

import {changeResultTags} from 'src/redux/actions/ReviewAction';
import {RootState} from 'src/redux/store';
const ReviewResultOrganism = () => {
  const boothName = '포토시그니처 대구 교동카페 거리점';
  const specificData = [
    {id: 0, title: '화질이 선명해요'},
    {id: 1, title: '보정이 자연스러워요'},
    {id: 2, title: '생각보다 하얗게 나와요'},
    {id: 3, title: '화질이 깨져요'},
    {id: 4, title: '생각보다 진하게 나와요'},
    {id: 5, title: '생각보다 어두워요'},
    {id: 6, title: '생각보다 어두워요'},
  ];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const resultTags = useSelector((state: RootState) => state.reviewReducer.resultTags);
  const resultNext = useSelector((state: RootState) => state.reviewReducer.resultNext);

  const tagOnPress = (id: number) => () => {
    dispatch(changeResultTags(id));
  };
  const nextOnPress = () => navigation.navigate('BoothImageReview' as never, {} as never);
  return (
    <ReviewSectionContainer>
      <ReviewBoothName>{boothName}</ReviewBoothName>

      <QuestionWrapper>
        <BoothQuestionDescription>결과물 사진은 어떻게 나왔나요?</BoothQuestionDescription>
        <BoothSpecificDescription>(최대 4개)</BoothSpecificDescription>
      </QuestionWrapper>
      <ResultListWrapper>
        <ResultFlatList
          scrollEnabled={true}
          data={specificData}
          numColumns={2}
          bounces={false}
          renderItem={({item}: any) => {
            return (
              <ReviewSelectPressable selected={resultTags[item.id]} onPress={tagOnPress(item.id)}>
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
        </TagsWrapper>

        <TagInputPressable>
          <TagInputText>태그를 입력해주세요</TagInputText>
        </TagInputPressable>
      </TagInputWrapper>
      <ReviewNextPressableWrapper>
        <ReviewNextPressable onPress={nextOnPress} disable={!resultNext} />
      </ReviewNextPressableWrapper>
    </ReviewSectionContainer>
  );
};

export default ReviewResultOrganism;
