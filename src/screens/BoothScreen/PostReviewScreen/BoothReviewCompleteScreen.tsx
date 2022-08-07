import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {PostReviewParamList} from '.';

import ReviewCompleteOrganism from 'src/components/ReviewCompleteOrganism';

export type ReviewCompleteScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothImageReviewScreen'
>;

const BoothReviewCompleteScreen = ({navigation}: ReviewCompleteScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return <ReviewCompleteOrganism />;
};
export default BoothReviewCompleteScreen;
