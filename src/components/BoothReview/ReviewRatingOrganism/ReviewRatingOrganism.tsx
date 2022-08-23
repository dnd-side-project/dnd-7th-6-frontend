import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import BoothReviewHeader from '../BoothReviewHeader';
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

import Alert from 'src/components/utils/Alert';
import useGetReviewTag from 'src/querys/useGetReviewTag';
import {changeSpecificTags, clearData} from 'src/redux/actions/ReviewAction';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';
import {PostReviewParamList} from 'src/screens/BoothScreen/PostReviewScreen';
const ReviewRatingOrganism = () => {
  const route = useRoute<RouteProp<PostReviewParamList, 'BoothStoreReviewScreen'>>();
  const {placeName} = route.params;
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
  const {data} = useGetReviewTag();
  const {currentStar, specificTags, specificNext} = useSelector(
    (state: RootState) => state.reviewReducer,
  );

  const [alertOpen, setAlertOpen] = useState(false);
  const tagsOnPress = (id: number) => () => {
    dispatch(changeSpecificTags(id));
  };
  const nextOnPress = () => navigation.navigate('BoothResultReview' as never, {} as never);
  useEffect(() => {
    dispatch(hideTabBar());
  });
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      setAlertOpen(true);
      return true;
    });
    return () => backHandler.remove();
  }, []);

  return (
    <ReviewSectionContainer>
      <BoothReviewHeader onPress={() => setAlertOpen(true)}>부스 리뷰 작성</BoothReviewHeader>

      {alertOpen && (
        <Alert
          title="리뷰 작성을 중단 하시겠어요?"
          subTitle="입력된 내용은 저장되지 않아요!"
          cancelButtonText="나가기"
          checkButtonText="계속 작성하기"
          onPressCheck={() => {
            setAlertOpen(false);
          }}
          onPressCancel={() => {
            dispatch(clearData());
            dispatch(showTabBar());
            navigation.goBack();
          }}
        />
      )}
      <ReviewBoothName>{placeName}</ReviewBoothName>
      <RatingnTextWrapper>
        <BoothRatingDescription>이 매장은 어떠셨나요?</BoothRatingDescription>
        <ReviewStarRating />
        <BoothRatingText>{boothRatingTextData[currentStar]}</BoothRatingText>
      </RatingnTextWrapper>
      <SpecificWrapper>
        <BoothRatingDescription>매장의 추천 포인트는 무엇인가요?</BoothRatingDescription>
        <BoothSpecificDescription>(최대 4개)</BoothSpecificDescription>
      </SpecificWrapper>
      <SpecificListWrapper>
        <SpecificFlatList
          scrollEnabled={true}
          data={data?.reviewTagMap.BOOTH_CONDITION}
          bounces={false}
          numColumns={2}
          renderItem={({item}: any) => {
            return (
              <ReviewSelectPressable
                imageUrl={item.tagIconImageUrl}
                selected={specificTags[item.id]}
                onPress={tagsOnPress(item.id)}>
                {item.title}
              </ReviewSelectPressable>
            );
          }}
        />
      </SpecificListWrapper>
      <ReviewNextPressableWrapper>
        <ReviewNextPressable onPress={nextOnPress} disable={!(currentStar > 0 && specificNext)} />
      </ReviewNextPressableWrapper>
    </ReviewSectionContainer>
  );
};

export default ReviewRatingOrganism;
