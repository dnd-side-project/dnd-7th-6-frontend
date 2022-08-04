import React from 'react';
import NaverMapView, {Marker} from 'react-native-nmap';

import {styles} from './NaverMap.styles';

type PhotoBoothData = {
  latitude: number;
  longitude: number;
  id: number;
};

const NaverMap = ({mapRef, setScreenPos, data}: any) => {
  return (
    // @ts-ignore: 모듈 문제
    <NaverMapView
      ref={mapRef}
      style={styles.NaverMapStyle}
      onCameraChange={event => {
        setScreenPos({latitude: event.latitude, longitude: event.longitude});
      }}
      zoomControl={false}
      onMapClick={e => console.log(e.longitude)}
      compass={false}
      scaleBar={false}
      showsMyLocationButton={false}>
      {data?.map(MarkersOnMap)}
    </NaverMapView>
  );
};

const MarkersOnMap = (data: PhotoBoothData) => {
  return (
    <Marker
      coordinate={{latitude: data.latitude, longitude: data.longitude}}
      key={data.id}
      image={require('src/assets/images/marker.png')}
    />
  );
};

export default NaverMap;
