import React from 'react';
import NaverMapView from 'react-native-nmap';

import {styles} from './NaverMap.styles';
const NaverMap = () => (
  <NaverMapView
    style={styles.NaverMapStyle}
    zoomControl={false}
    compass={false}
    scaleBar={false}
    showsMyLocationButton={true}
  />
);

export default NaverMap;
