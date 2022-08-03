import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';

import {BoothScreenProps} from './BoothScreen';
import {BoothSearchHeaderStyle} from './BoothSearchScreen.header';
const BoothSearchScreen = ({navigation, route}: BoothScreenProps) => {
  useLayoutEffect(() => {
    BoothSearchHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <View />;
};

export default BoothSearchScreen;
