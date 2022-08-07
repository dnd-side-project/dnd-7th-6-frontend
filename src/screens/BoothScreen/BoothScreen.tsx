import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';

import BoothHeaderStyle from './BoothScreen.header';

import {BoothParamList} from '.';

import MapBottomSheetOrganism from 'src/components/MapBottomSheetOrganism';
export type BoothScreenProps = NativeStackScreenProps<BoothParamList, 'BoothScreen'>;
const BoothScreen = ({navigation, route}: BoothScreenProps) => {
  useLayoutEffect(() => {
    BoothHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <MapBottomSheetOrganism />;
};

export default BoothScreen;
