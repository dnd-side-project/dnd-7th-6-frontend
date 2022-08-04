import React from 'react';

import {BoothScreenProps} from './BoothScreen';

import MapSearchBar from 'src/components/MapSearchBar';

const BoothHeaderStyle = ({navigation}: BoothScreenProps) => {
  navigation.setOptions({
    headerShown: true,
    headerShadowVisible: false,
    headerTransparent: true,
    headerTitle: HeaderMapSearchBar,
  });
};

const HeaderMapSearchBar = () => {
  return <MapSearchBar>서울 마포구 홍익로 6길 21(서교동)</MapSearchBar>;
};
export default BoothHeaderStyle;
