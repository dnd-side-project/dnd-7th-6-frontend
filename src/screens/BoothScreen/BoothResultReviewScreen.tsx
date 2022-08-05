import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {ReviewHeaderStyle} from './BoothReviewScreen.header';

import {BoothParamList} from '.';

import ReviewResultOrganism from 'src/components/ReviewResultOrganism';
export type ResultReviewScreenProps = NativeStackScreenProps<
  BoothParamList,
  'BoothResultReviewScreen'
>;

const BoothResultReviewScreen = ({navigation, route}: ResultReviewScreenProps) => {
  useLayoutEffect(() => {
    ReviewHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <ReviewResultOrganism />;
};
export default BoothResultReviewScreen;
