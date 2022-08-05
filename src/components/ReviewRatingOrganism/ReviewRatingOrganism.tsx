import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import ReviewBoothName from '../ReviewBoothName';
import ReviewNextPressable from '../ReviewNextPressable';
import ReviewSelectPressable from '../ReviewSelectPressable';
import ReviewStarRating from '../ReviewStarRating';
import {
  BoothRatingDescription,
  BoothSpecificDescription,
  RatingnTextWrapper,
  ReviewNextPressableWrapper,
  ReviewSectionContainer,
  SpecificFlatList,
  SpecificWrapper,
} from './ReviewRatingOrganism.styles';

import {RootState} from 'src/redux/store';
const ReviewRatingOrganism = () => {
  const boothName = '포토시그니처 대구 교동카페 거리점';
  const specificData = [
    {id: 0, title: '소품 상태가 깔끔해요'},
    {id: 1, title: '파우더룸이 잘 되어있어요'},
    {id: 2, title: '부스 공간이 넓어요'},
    {id: 3, title: '부스가 청결해요'},
    {id: 4, title: 'QR 코드를 제공해요'},
    {id: 5, title: '대기 공간이 넓어요'},
    {id: 6, title: '카드결제가 가능해요'},
    {id: 7, title: '홀수출력이 가능해요'},
    {id: 8, title: '예쁜 셀프존이 있어요'},
    {id: 9, title: '배경색이 다양해요'},
  ];
  const navigation = useNavigation();
  const [select, setSelect] = useState<any>({});
  const [specificCounter, setSpecificCounter] = useState([]);
  const currentStars: number = useSelector((state: RootState) => state.reviewReducer.currentStar);
  return (
    <ReviewSectionContainer>
      <ReviewBoothName>{boothName}</ReviewBoothName>
      <RatingnTextWrapper>
        <BoothRatingDescription>이 매장은 어떠셨나요?</BoothRatingDescription>

        <ReviewStarRating />
      </RatingnTextWrapper>
      <SpecificWrapper>
        <BoothRatingDescription>매장 특징이 무엇인가요?</BoothRatingDescription>
        <BoothSpecificDescription>(최대 4개)</BoothSpecificDescription>
      </SpecificWrapper>
      <SpecificFlatList
        scrollEnabled={false}
        data={specificData}
        numColumns={2}
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
                  setSpecificCounter(limiter);
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
      <ReviewNextPressableWrapper>
        <ReviewNextPressable
          onPress={
            currentStars > 0 && specificCounter.length > 0
              ? () => navigation.navigate('BoothResultReview' as never, {} as never)
              : () => {}
          }
          disable={!(currentStars > 0 && specificCounter.length > 0)}
        />
      </ReviewNextPressableWrapper>
    </ReviewSectionContainer>
  );
};

export default ReviewRatingOrganism;
