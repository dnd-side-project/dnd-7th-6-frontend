import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';

import ReviewNextPressable from '../ReviewNextPressable';
import {
  CompleteButtonWrapper,
  CompleteSubTitle,
  CompleteTitle,
  FirstButtonWrapper,
  IllustnTitleWrapper,
  IllustWrapper,
  ReviewCompleteContainer,
} from './ReviewCompleteOrganism.styles';

import {showTabBar} from 'src/redux/actions/TabBarAction';
import {PostReviewParamList} from 'src/screens/BoothScreen/PostReviewScreen';
const ReviewCompleteOrganism = () => {
  const route = useRoute<RouteProp<PostReviewParamList, 'BoothReviewCompleteScreen'>>();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {boothId} = route.params;
  const gotoBoothDetailOnPress = () => {
    navigation.reset({
      index: 1,
      routes: [{name: 'Booth' as never}, {name: 'BoothDetail' as never, params: {id: boothId}}],
    });
    dispatch(showTabBar());
  };

  const gotoMyScreenOnPress = () => {
    navigation.reset({
      routes: [{name: 'RouteRecordScreen' as never}],
    });
    dispatch(showTabBar());
  };

  return (
    <ReviewCompleteContainer>
      <IllustnTitleWrapper>
        <IllustWrapper />
        <CompleteTitle>부스 리뷰 작성 완료!</CompleteTitle>
        <CompleteSubTitle>
          {'알려주신 정보가 의미있게 될거에요!\n작성해 주셔서 감사합니다:)'}
        </CompleteSubTitle>
      </IllustnTitleWrapper>
      <CompleteButtonWrapper>
        <FirstButtonWrapper>
          <ReviewNextPressable onPress={gotoMyScreenOnPress} disable={false}>
            내가 쓴 리뷰 보기
          </ReviewNextPressable>
        </FirstButtonWrapper>
        <ReviewNextPressable
          onPress={gotoBoothDetailOnPress}
          onlyColordisable={true}
          disable={false}>
          부스 상세로 돌아가기
        </ReviewNextPressable>
      </CompleteButtonWrapper>
    </ReviewCompleteContainer>
  );
};

export default ReviewCompleteOrganism;
