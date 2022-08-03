import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';
import {View} from 'react-native';

import BoothHeaderStyle from './BoothScreen.header';

import {BoothParamList} from '.';

import MapNaverMapOrganism from 'src/components/MapNaverMapOrganism';
export type BoothScreenProps = NativeStackScreenProps<BoothParamList, 'BoothScreen'>;
const BoothScreen = ({navigation, route}: BoothScreenProps) => {
  useLayoutEffect(() => {
    BoothHeaderStyle({navigation, route});
  }, [navigation, route]);
  return (
    <View>
      <MapNaverMapOrganism />
    </View>
  );
};

export default BoothScreen;
