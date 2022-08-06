import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {ReviewHeaderStyle} from './BoothReviewScreen.header';

import {PostReviewParamList} from '.';

import ReviewResultOrganism from 'src/components/ReviewResultOrganism';
export type ResultReviewScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothResultReviewScreen'
>;

const BoothResultReviewScreen = ({navigation, route}: ResultReviewScreenProps) => {
  useLayoutEffect(() => {
    ReviewHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <ReviewResultOrganism />;
};
export default BoothResultReviewScreen;
