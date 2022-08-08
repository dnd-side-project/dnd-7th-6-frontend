import React, {useState} from 'react';
import NaverMapView, {Marker} from 'react-native-nmap';

import {styles} from './NaverMap.styles';

import {PhotoBoothContentData} from 'src/types';

const NaverMap = ({mapRef, centerPos, setScreenPos, data, setShowRefreshPressable}: any) => {
  return (
    // @ts-ignore: 모듈 문제
    <NaverMapView
      ref={mapRef}
      style={styles.NaverMapStyle}
      onCameraChange={event => {
        if (
          event.latitude.toFixed(6) !== centerPos.latitude.toFixed(6) ||
          event.longitude.toFixed(6) !== centerPos.longitude.toFixed(6)
        ) {
          setScreenPos({latitude: event.latitude, longitude: event.longitude});
          setShowRefreshPressable(true);
        }
      }}
      zoomControl={false}
      compass={false}
      scaleBar={false}
      showsMyLocationButton={false}
      mapType={1}>
      {data?.content.map(MarkersOnMap)}
    </NaverMapView>
  );
};

const MarkersOnMap = (data: PhotoBoothContentData) => {
  return (
    <Marker
      coordinate={{latitude: data.photoBooth.latitude, longitude: data.photoBooth.longitude}}
      key={data.photoBooth.id}
      caption={{text: data.photoBooth.name, textSize: 10}}
      image={require('src/assets/images/marker.png')}
    />
  );
};

export default NaverMap;
