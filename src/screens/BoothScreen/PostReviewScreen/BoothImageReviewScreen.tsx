import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {ReviewHeaderStyle} from './BoothReviewScreen.header';

import {PostReviewParamList} from '.';

import ReviewImageOrganism from 'src/components/ReviewImageOrganism';

export type ResultImageScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothImageReviewScreen'
>;

const BoothImageReviewScreen = ({navigation, route}: ResultImageScreenProps) => {
  useLayoutEffect(() => {
    ReviewHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <ReviewImageOrganism />;
};
export default BoothImageReviewScreen;
