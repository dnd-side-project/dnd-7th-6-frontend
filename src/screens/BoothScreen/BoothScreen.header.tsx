import React from 'react';

import {BoothScreenProps} from './BoothScreen';

import MapSearchBar from 'src/components/Booth/MapSearchBar';

const BoothHeaderStyle = ({navigation}: BoothScreenProps) => {
  navigation.setOptions({
    headerShown: true,
    headerShadowVisible: false,
    headerTransparent: true,
    headerTitle: HeaderMapSearchBar,
  });
};

const HeaderMapSearchBar = () => {
  return <MapSearchBar />;
};
export default BoothHeaderStyle;
