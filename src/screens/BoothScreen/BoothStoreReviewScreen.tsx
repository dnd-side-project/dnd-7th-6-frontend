import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';
import {View} from 'react-native';

import {ReviewHeaderStyle} from './BoothReviewScreen.header';

import {BoothParamList} from '.';

import ReviewRatingOrganism from 'src/components/ReviewRatingOrganism';

export type StoreReviewScreenProps = NativeStackScreenProps<
  BoothParamList,
  'BoothStoreReviewScreen'
>;
const BoothStoreReviewScreen = ({navigation, route}: StoreReviewScreenProps) => {
  useLayoutEffect(() => {
    ReviewHeaderStyle({navigation, route});
  }, [navigation, route]);
  return (
    <View>
      <ReviewRatingOrganism />
    </View>
  );
};

export default BoothStoreReviewScreen;
