import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {DetailHeaderStyle} from './BoothDetailScreen.styles';

import {BoothParamList} from '.';

import HeaderOrganism from 'src/components/BoothDetail/HeaderOrganism';
import OuterScrollView from 'src/components/BoothDetail/OuterScrollView';

export type DetailScreenProps = NativeStackScreenProps<BoothParamList, 'BoothDetailScreen'>;

const BoothDetailScreen = ({navigation, route}: DetailScreenProps) => {
  const {id, distance} = route.params;

  useLayoutEffect(() => {
    DetailHeaderStyle({navigation, route});
  });

  return (
    <SafeAreaView>
      <HeaderOrganism id={id} navigation={navigation} />
      <OuterScrollView id={id} distance={distance} />
    </SafeAreaView>
  );
};

export default BoothDetailScreen;
