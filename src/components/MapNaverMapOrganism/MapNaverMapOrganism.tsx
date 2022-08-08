import React, {useState, useRef, useEffect} from 'react';
import NaverMapView, {TrackingMode, type Coord} from 'react-native-nmap';
import {useSelector} from 'react-redux';

import MapRefreshSearchPressable from '../MapRefreshSearchPressable';
import NaverMap from '../NaverMap';
import {
  ContainerView,
  MapRefreshPressableWrapper,
  RefreshandSearchWrapper,
} from './MapNaverMapOrganism.styles';

import requestLocationPermission from 'src/hooks/requestLocationPermission';
import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
import {RootState} from 'src/redux/store';
import getGeolocation from 'src/utils/getGeolocation';
const MapNaverMapOrganism = () => {
  const mapRef = useRef<NaverMapView>(null);

  const [onInitialize, setOnInitialize] = useState<Boolean>(true);
  const [showRefreshPressable, setShowRefreshPressable] = useState<Boolean>(false);
  const searchedCoord: Coord = useSelector((state: RootState) => state.mapReducer.mapCoord);
  const [screenCenterPos, setScreenCenterPos] = useState<Coord>({
    latitude: 0,
    longitude: 0,
  });
  const {data, refetch} = useGetPhotoBoothLocation({...screenCenterPos});
  //첫 로딩시 현재 사용자 위치 가져오기
  useEffect(() => {
    const initMap = async () => {
      const permission = await requestLocationPermission();
      if (permission !== 'granted') {
        return;
      }
      const {longitude, latitude} = await getGeolocation();
      setScreenCenterPos({latitude: latitude, longitude: longitude});
      setOnInitialize(false);
      if (!mapRef || !mapRef.current) {
        return;
      }
      mapRef.current.setLocationTrackingMode(TrackingMode.Follow);
      mapRef.current.animateToCoordinate({
        latitude: latitude,
        longitude: longitude,
      });
    };
    initMap();
  }, []);

  //첫 로딩시 data refetching
  useEffect(() => {
    refetch();
  }, [onInitialize, refetch]);
  useEffect(() => {
    setShowRefreshPressable(true);
  }, [screenCenterPos]);

  //coord 변경 되었을 때 화면 옮기기
  useEffect(() => {
    if (searchedCoord.latitude === 0 && searchedCoord.longitude === 0) {
      return;
    }
    if (!mapRef || !mapRef.current) {
      return;
    }
    mapRef.current.animateToCoordinate({
      latitude: searchedCoord.latitude,
      longitude: searchedCoord.longitude,
    });
  }, [searchedCoord]);

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
