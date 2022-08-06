import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

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
  TagInputWrapper,
} from './ReviewResultOrganism.styles';
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
  const [select, setSelect] = useState<any>({});
  const [resultCounter, setResultCounter] = useState([]);
  const navigation = useNavigation();

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
          renderItem={({item, index}: any) => {
            return (
              <ReviewSelectPressable
                selected={select[index]}
                onPress={() =>
                  setSelect((prevState: any) => {
                    const nextState = {...prevState};
                    nextState[index.toString()] = !prevState[index.toString()];
                    const limiter: any = Object.values(nextState).filter(function (v) {
                      if (v) {
                        return v;
                      }
                    });
                    setResultCounter(limiter);
                    if (limiter.length > 4) {
                      return prevState;
                    }
                    return nextState;
                  })
                }>
                {item.title}
              </ReviewSelectPressable>
            );
          }}
        />
      </ResultListWrapper>

      <TagInputWrapper>
        <TagInputDescription>태그 입력</TagInputDescription>
        <TagInputPressable />
      </TagInputWrapper>
      <ReviewNextPressableWrapper>
        <ReviewNextPressable
          onPress={
            resultCounter.length > 0
              ? () => navigation.navigate('BoothImageReview' as never, {} as never)
              : () => {}
          }
          disable={!(resultCounter.length > 0)}
        />
      </ReviewNextPressableWrapper>
    </ReviewSectionContainer>
  );
};

export default ReviewResultOrganism;
