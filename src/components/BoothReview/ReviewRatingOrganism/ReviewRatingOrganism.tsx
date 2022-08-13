import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ReviewBoothName from '../ReviewBoothName';
import ReviewNextPressable from '../ReviewNextPressable';
import ReviewSelectPressable from '../ReviewSelectPressable';
import ReviewStarRating from '../ReviewStarRating';
import {
  BoothRatingDescription,
  BoothRatingText,
  BoothSpecificDescription,
  RatingnTextWrapper,
  ReviewNextPressableWrapper,
  ReviewSectionContainer,
  SpecificFlatList,
  SpecificListWrapper,
  SpecificWrapper,
} from './ReviewRatingOrganism.styles';

import {changeSpecificTags, clearData} from 'src/redux/actions/ReviewAction';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';
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
  const boothRatingTextData = [
    ' ',
    '별로에요',
    '그저 그래요',
    '보통이에요',
    '이정도면 만족해요!',
    '최고예요!',
  ];
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentStars: number = useSelector((state: RootState) => state.reviewReducer.currentStar);
  const specificTags = useSelector((state: RootState) => state.reviewReducer.specificTags);
  const specificNext = useSelector((state: RootState) => state.reviewReducer.specificNext);

  const tagsOnPress = (id: number) => () => {
    dispatch(changeSpecificTags(id));
  };
  const nextOnPress = () => navigation.navigate('BoothResultReview' as never, {} as never);
  useEffect(() => {
    dispatch(hideTabBar());
  });
  // return ()=>{navigation.removeListener('beforeRemove')}
  useEffect(() => {
    const navigationCallback = (e: any): void => {
      if (e.data.action.type !== 'GO_BACK') {
        return;
      }
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert('리뷰 작성을 중단하시겠어요??', '입력한 내용은 저장되지 않아요!', [
        {text: '계속 작성하기', style: 'cancel', onPress: () => {}},
        {
          text: '나가기',
          style: 'destructive',
          onPress: () => {
            dispatch(clearData());
            dispatch(showTabBar());

            navigation.dispatch(e.data.action);
          },
        },
      ]);
    };
    navigation.addListener('beforeRemove', navigationCallback);
  }, []);

  return (
    <ReviewSectionContainer>
      <ReviewBoothName>{boothName}</ReviewBoothName>
      <RatingnTextWrapper>
        <BoothRatingDescription>이 매장은 어떠셨나요?</BoothRatingDescription>
        <ReviewStarRating />
        <BoothRatingText>{boothRatingTextData[currentStars]}</BoothRatingText>
      </RatingnTextWrapper>
      <SpecificWrapper>
        <BoothRatingDescription>매장의 추천 포인트는 무엇인가요?</BoothRatingDescription>
        <BoothSpecificDescription>(최대 4개)</BoothSpecificDescription>
      </SpecificWrapper>
      <SpecificListWrapper>
        <SpecificFlatList
          scrollEnabled={true}
          data={specificData}
          bounces={false}
          numColumns={2}
          renderItem={({item}: any) => {
            return (
              <ReviewSelectPressable
                selected={specificTags[item.id]}
                onPress={tagsOnPress(item.id)}>
                {item.title}
              </ReviewSelectPressable>
            );
          }}
        />
      </SpecificListWrapper>
      <ReviewNextPressableWrapper>
        <ReviewNextPressable onPress={nextOnPress} disable={!(currentStars > 0 && specificNext)} />
      </ReviewNextPressableWrapper>
    </ReviewSectionContainer>
  );
};

export default ReviewRatingOrganism;
