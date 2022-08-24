import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {PostReviewParamList} from '.';

import BoothReviewHeader from 'src/components/BoothReview/BoothReviewHeader';
import ReviewImageOrganism from 'src/components/BoothReview/ReviewImageOrganism';

export type ResultImageScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothImageReviewScreen'
>;

const BoothImageReviewScreen = ({navigation}: ResultImageScreenProps) => {
  return (
    <>
      <BoothReviewHeader onPress={() => navigation.goBack()}>부스 리뷰 작성</BoothReviewHeader>
      <ReviewImageOrganism />
    </>
  );
};
export default BoothImageReviewScreen;
