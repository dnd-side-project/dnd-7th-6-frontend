import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';

import {ReviewHeaderStyle} from './BoothReviewScreen.header';

import {BoothParamList} from '.';

export type ResultImageScreenProps = NativeStackScreenProps<
  BoothParamList,
  'BoothImageReviewScreen'
>;

const BoothImageReviewScreen = ({navigation, route}: ResultImageScreenProps) => {
  useLayoutEffect(() => {
    ReviewHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <View />;
};
export default BoothImageReviewScreen;
