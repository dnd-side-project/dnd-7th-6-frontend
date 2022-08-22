import {useNavigation} from '@react-navigation/native';
import React from 'react';
import FastImage from 'react-native-fast-image';

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

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
const ReviewCompleteOrganism = () => {
  const navigation = useNavigation();
  const gotoBoothDetailOnPress = () =>
    navigation.reset({
      index: 1,
      routes: [{name: 'Booth' as never}, {name: 'BoothDetail' as never}],
    });
  const gotoMyScreenOnPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'MyScreen' as never}],
    });
  };

  return (
    <ReviewCompleteContainer>
      <IllustnTitleWrapper>
        <IllustWrapper>
          <FastImage
            source={require('src/assets/images/end/end_review.png')}
            style={{width: widthPercentage(343), height: heightPercentage(230)}}
          />
        </IllustWrapper>
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
