import React from 'react';
import NaverMapView, {type Coord, Marker} from 'react-native-nmap';

import {styles} from './NaverMap.styles';
const NaverMap = ({mapRef, setScreenPos, data}: any) => {
  return (
    // @ts-ignore: 모듈 문제
    <NaverMapView
      ref={mapRef}
      style={styles.NaverMapStyle}
      onCameraChange={event => setScreenPos({latitude: event.latitude, longitude: event.longitude})}
      zoomControl={false}
      compass={false}
      scaleBar={false}
      showsMyLocationButton={false}>
      {data.map(MarkersOnMap)}
    </NaverMapView>
  );
};

const MarkersOnMap = (coordinate: Coord) => {
  return <Marker coordinate={{...coordinate}} />;
};

export default NaverMap;
