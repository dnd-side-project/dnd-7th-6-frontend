import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {PostReviewParamList} from '.';

import ReviewRatingOrganism from 'src/components/BoothReview/ReviewRatingOrganism';

export type StoreReviewScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothStoreReviewScreen'
>;
const BoothStoreReviewScreen = () => {
  return <ReviewRatingOrganism />;
};

export default BoothStoreReviewScreen;
