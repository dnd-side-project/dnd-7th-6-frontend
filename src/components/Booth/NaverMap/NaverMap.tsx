import React from 'react';
import {View} from 'react-native';
import NaverMapView, {Marker} from 'react-native-nmap';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './NaverMap.styles';

import {focusBooth} from 'src/redux/actions/MapAction';
import {RootState} from 'src/redux/store';
import {fontPercentage, heightPercentage} from 'src/styles/ScreenResponse';
import {PhotoBoothContentData} from 'src/types';
import {getIconMarker} from 'src/utils/getIconMarker';
import {getMarkerColor} from 'src/utils/getMarkerColor';

const NaverMap = ({mapRef, centerPos, setScreenPos, data, setShowRefreshPressable}: any) => {
  const focusedBooth = useSelector((state: RootState) => state.mapReducer.focusBooth);
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
      {focusedBooth && data?.content.length > 0 && (
        <Marker
          coordinate={{
            latitude: focusedBooth?.photoBooth.latitude,
            longitude: focusedBooth?.photoBooth.longitude,
          }}
          key={focusedBooth.photoBooth.id}
          zIndex={10}
          width={heightPercentage(70)}
          height={heightPercentage(70)}
          caption={{
            align: 3,
            text: focusedBooth.photoBooth.name,
            textSize: fontPercentage(12),
            color: getMarkerColor(focusedBooth.photoBooth.name),
          }}
          image={getIconMarker(focusedBooth.photoBooth.name)}
        />
      )}

      {data?.content.map((item: PhotoBoothContentData) => {
        return item.photoBooth.id !== focusedBooth?.photoBooth.id ? (
          <MarkersOnMap data={item} key={item?.photoBooth.id} />
        ) : (
          <View key={null} />
        );
      })}
    </NaverMapView>
  );
};

const MarkersOnMap = ({data}: {data: PhotoBoothContentData}) => {
  const dispatch = useDispatch();
  const markerOnClick = () => {
    dispatch(focusBooth(data));
  };
  return (
    <Marker
      width={heightPercentage(52)}
      height={heightPercentage(52)}
      coordinate={{latitude: data.photoBooth.latitude, longitude: data.photoBooth.longitude}}
      onClick={markerOnClick}
      image={getIconMarker(data.photoBooth.name)}
    />
  );
};

export default NaverMap;
