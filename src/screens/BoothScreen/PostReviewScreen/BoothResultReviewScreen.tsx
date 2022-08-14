import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {PostReviewParamList} from '.';

import BoothReviewHeader from 'src/components/BoothReview/BoothReviewHeader';
import ReviewResultOrganism from 'src/components/BoothReview/ReviewResultOrganism';

export type ResultReviewScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothResultReviewScreen'
>;

const BoothResultReviewScreen = ({navigation}: ResultReviewScreenProps) => {
  return (
    <>
      <BoothReviewHeader onPress={() => navigation.goBack()}>부스 리뷰 작성</BoothReviewHeader>
      <ReviewResultOrganism />
    </>
  );
};
export default BoothResultReviewScreen;
