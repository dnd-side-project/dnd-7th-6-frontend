import React, {useState, useRef, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';

import MapRefreshSearchPressable from '../MapRefreshSearchPressable';
import NaverMap from '../NaverMap';
import {
  ContainerView,
  MapRefreshPressableWrapper,
  RefreshandSearchWrapper,
} from './MapNaverMapOrganism.styles';

import requestLocationPermission from 'src/hooks/requestLocationPermission';
import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
type positionType = {
  latitude: number;
  longitude: number;
};
const MapNaverMapOrganism = () => {
  const mapRef = useRef(null);

  const [showRefreshPressable, setShowRefreshPressable] = useState<Boolean>(true);
  const [screenCenterPos, setScreenCenterPos] = useState<positionType>({
    latitude: 0,
    longitude: 0,
  });
  const {data, refetch} = useGetPhotoBoothLocation({...screenCenterPos});

  useEffect(() => {
    requestLocationPermission().then(result => {
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          current => {
            const {latitude, longitude} = {
              latitude: current.coords.latitude,
              longitude: current.coords.longitude,
            };
            mapRef.current.animateToCoordinate({
              latitude: latitude,
              longitude: longitude,
            });

            refetch();
          },
          console.error,
          {
            enableHighAccuracy: true,
            timeout: 20000,
          },
        );
      }
    });
  }, []);

  return (
    <ContainerView>
      <RefreshandSearchWrapper>
        {showRefreshPressable && (
          <MapRefreshPressableWrapper>
            <MapRefreshSearchPressable
              onPress={() => {
                refetch();
              }}>
              이 지역 재검색
            </MapRefreshSearchPressable>
          </MapRefreshPressableWrapper>
        )}
      </RefreshandSearchWrapper>
      <NaverMap mapRef={mapRef} setScreenPos={setScreenCenterPos} data={data?.data} />
    </ContainerView>
  );
};

export default MapNaverMapOrganism;
