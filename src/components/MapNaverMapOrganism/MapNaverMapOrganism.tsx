import React, {useState, useRef, useEffect} from 'react';

import MapRefreshSearchPressable from '../MapRefreshSearchPressable';
import NaverMap from '../NaverMap';
import {
  ContainerView,
  MapRefreshPressableWrapper,
  RefreshandSearchWrapper,
} from './MapNaverMapOrganism.styles';

import requestLocationPermission from 'src/hooks/requestLocationPermission';
import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
import getGeolocation from 'src/utils/getGeolocation';
type positionType = {
  latitude: number;
  longitude: number;
};
const MapNaverMapOrganism = () => {
  const mapRef = useRef(null);
  const [onInitialize, setOnInitialize] = useState<Boolean>(true);
  const [showRefreshPressable, setShowRefreshPressable] = useState<Boolean>(false);
  const [screenCenterPos, setScreenCenterPos] = useState<positionType>({
    latitude: 0,
    longitude: 0,
  });
  const {data, refetch} = useGetPhotoBoothLocation({...screenCenterPos});

  useEffect(() => {
    requestLocationPermission().then(async result => {
      if (result === 'granted') {
        const {longitude, latitude} = await getGeolocation();
        setScreenCenterPos({latitude: latitude, longitude: longitude});
        setOnInitialize(false);
        //@ts-ignore: native 모듈 문제
        mapRef.current.animateToCoordinate({
          latitude: latitude,
          longitude: longitude,
        });
      }
    });
  }, []);
  useEffect(() => {
    refetch();
  }, [onInitialize, refetch]);
  useEffect(() => {
    setShowRefreshPressable(true);
  }, [screenCenterPos]);

  return (
    <ContainerView>
      <RefreshandSearchWrapper>
        {showRefreshPressable && (
          <MapRefreshPressableWrapper>
            <MapRefreshSearchPressable
              onPress={() => {
                refetch();
                setShowRefreshPressable(false);
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
