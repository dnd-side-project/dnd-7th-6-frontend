import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {PostReviewParamList} from '.';

import BoothReviewHeader from 'src/components/BoothReview/BoothReviewHeader';
import ReviewTagOrganism from 'src/components/BoothReview/ReviewTagOrganism';

export type BoothTagInputScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothTagInputScreen'
>;
const BoothTagInputScreen = ({navigation}: BoothTagInputScreenProps) => {
  return (
    <>
      <BoothReviewHeader onPress={() => navigation.goBack()}>부스 리뷰 작성</BoothReviewHeader>
      <ReviewTagOrganism />
    </>
  );
};

export default BoothTagInputScreen;
