import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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
  SpecificListWrapper,
  SpecificWrapper,
} from './ReviewRatingOrganism.styles';

import {clearData} from 'src/redux/actions/ReviewAction';
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
  const dispatch = useDispatch();
  const [select, setSelect] = useState<any>({});
  const [specificCounter, setSpecificCounter] = useState([]);
  const currentStars: number = useSelector((state: RootState) => state.reviewReducer.currentStar);
  const tagOnPress = (index: {toString: () => string | number}) =>
    setSelect((prevState: any) => {
      const nextState = {...prevState};
      nextState[index.toString()] = !prevState[index.toString()];
      const limiter: any = Object.values(nextState).filter(v => {
        if (v) {
          return v;
        }
      });
      setSpecificCounter(limiter);
      if (limiter.length > 4) {
        return prevState;
      }
      return nextState;
    });
  const nextOnPress = () => navigation.navigate('BoothResultReview' as never, {} as never);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert('리뷰 작성을 중단하시겠어요??', '입력한 내용은 저장되지 않아요!', [
          {text: '계속 작성하기', style: 'cancel', onPress: () => {}},
          {
            text: '나가기',
            style: 'destructive',
            onPress: () => {
              dispatch(clearData());
              navigation.dispatch(e.data.action);
            },
          },
        ]);
      }),
    [navigation],
  );

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
      <SpecificListWrapper>
        <SpecificFlatList
          scrollEnabled={true}
          bounces={false}
          data={specificData}
          numColumns={2}
          renderItem={({item, index}: any) => {
            return (
              <ReviewSelectPressable selected={select[index]} onPress={() => tagOnPress(index)}>
                {item.title}
              </ReviewSelectPressable>
            );
          }}
        />
      </SpecificListWrapper>
      <ReviewNextPressableWrapper>
        <ReviewNextPressable
          onPress={nextOnPress}
          disable={!(currentStars > 0 && specificCounter.length > 0)}
        />
      </ReviewNextPressableWrapper>
    </ReviewSectionContainer>
  );
};

export default ReviewRatingOrganism;
