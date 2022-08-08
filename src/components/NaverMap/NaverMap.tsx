import React from 'react';
import NaverMapView, {Marker} from 'react-native-nmap';
import {useDispatch} from 'react-redux';

import {styles} from './NaverMap.styles';

import {changeBottomSheetHeight} from 'src/redux/actions/MapAction';
import {PhotoBoothContentData} from 'src/types';

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
      image={require('src/assets/images/marker.png')}
    />
  );
};

export default NaverMap;
