import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';

import {ReviewHeaderStyle} from './BoothReviewScreen.header';

import {PostReviewParamList} from '.';

import ReviewRatingOrganism from 'src/components/BoothReview/ReviewRatingOrganism';

export type StoreReviewScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothStoreReviewScreen'
>;
const BoothStoreReviewScreen = ({navigation, route}: StoreReviewScreenProps) => {
  useLayoutEffect(() => {
    ReviewHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <ReviewRatingOrganism />;
};

export default BoothStoreReviewScreen;
