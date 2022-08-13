import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';

import {BoothTagHeaderStyle} from './BoothTagInputScreen.header';

import {PostReviewParamList} from '.';

import ReviewTagOrganism from 'src/components/BoothReview/ReviewTagOrganism';

export type BoothTagInputScreenProps = NativeStackScreenProps<
  PostReviewParamList,
  'BoothTagInputScreen'
>;
const BoothTagInputScreen = ({navigation, route}: BoothTagInputScreenProps) => {
  useLayoutEffect(() => {
    BoothTagHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <ReviewTagOrganism />;
};

export default BoothTagInputScreen;
