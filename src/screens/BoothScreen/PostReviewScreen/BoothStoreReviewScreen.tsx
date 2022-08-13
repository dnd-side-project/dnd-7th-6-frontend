import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {PostReviewParamList} from '.';

import BoothReviewHeader from 'src/components/BoothReview/BoothReviewHeader';
import ReviewRatingOrganism from 'src/components/BoothReview/ReviewRatingOrganism';

export type StoreReviewScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothStoreReviewScreen'
>;
const BoothStoreReviewScreen = ({navigation}: StoreReviewScreenProps) => {
  return (
    <>
      <BoothReviewHeader onPress={() => navigation.goBack()}>부스 리뷰 작성</BoothReviewHeader>
      <ReviewRatingOrganism />
    </>
  );
};

export default BoothStoreReviewScreen;
