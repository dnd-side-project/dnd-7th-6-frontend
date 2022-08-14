import React, {useLayoutEffect} from 'react';

import {BoothScreenProps} from './BoothScreen';
import {BoothSearchHeaderStyle} from './BoothSearchScreen.header';

import MapSearchList from 'src/components/Booth/MapSearchList';
const BoothSearchScreen = ({navigation, route}: BoothScreenProps) => {
  useLayoutEffect(() => {
    BoothSearchHeaderStyle({navigation, route});
  }, [navigation, route]);
  return <MapSearchList />;
};

export default BoothSearchScreen;
