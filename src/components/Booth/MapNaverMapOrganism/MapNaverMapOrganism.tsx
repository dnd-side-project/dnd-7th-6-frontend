import React, {useState, useRef, useEffect} from 'react';
import {Platform} from 'react-native';
import NaverMapView, {TrackingMode, type Coord} from 'react-native-nmap';
import {useDispatch, useSelector} from 'react-redux';

import MapFilterOrganism from '../MapFilterOrganism';
import MapRefreshSearchPressable from '../MapRefreshSearchPressable';
import NaverMap from '../NaverMap';
import {
  ContainerView,
  CurrentPositionPressable,
  FilterWrapper,
  RefreshPressableWrapper,
} from './MapNaverMapOrganism.styles';

import requestLocationPermission from 'src/hooks/requestLocationPermission';
import CrosshairIcon from 'src/icons/CrosshairIcon';
import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
import {focusBooth} from 'src/redux/actions/MapAction';
import {RootState} from 'src/redux/store';
import getGeolocation from 'src/utils/getGeolocation';
const MapNaverMapOrganism = () => {
  const mapRef = useRef<NaverMapView>(null);
  const [showRefreshPressable, setShowRefreshPressable] = useState<Boolean>(false);
  const searchedCoord: Coord = useSelector((state: RootState) => state.mapReducer.mapCoord);
  const [selectTagArr, setSelectTagArr] = useState<(number | undefined)[]>([]);
  const [screenCenterPos, setScreenCenterPos] = useState<Coord>({
    latitude: 0,
    longitude: 0,
  });
  const [refetchPos, setRetchPos] = useState<Coord>({
    latitude: 0,
    longitude: 0,
  });
  const {data, refetch, isLoading, isFetching} = useGetPhotoBoothLocation({
    coord: refetchPos,
    selectTagArr,
  });
  const dispatch = useDispatch();
  const refetchOnPress = () => {
    setRetchPos(screenCenterPos);
  };

  //첫 로딩시 현재 사용자 위치 가져오기
  useEffect(() => {
    const initMap = async () => {
      const permission = await requestLocationPermission();
      if (permission !== 'granted') {
        return;
      }
      mapRef.current?.setLocationTrackingMode(TrackingMode.Follow);
      const {longitude, latitude} = await getGeolocation();
      if (Platform.OS === 'android') {
        mapRef.current?.animateToCoordinate({latitude: latitude, longitude: longitude});
      }
      setRetchPos({latitude: latitude, longitude: longitude});
    };
    initMap();
  }, []);

  useEffect(() => {
    if (refetchPos.latitude === 0 || refetchPos.longitude === 0) {
      return;
    }
    setTimeout(() => {
      refetch();
    }, 1);
  }, [refetchPos]);

  useEffect(() => {
    if (
      screenCenterPos.latitude === 0 ||
      screenCenterPos.longitude === 0 ||
      screenCenterPos.longitude === parseFloat(refetchPos.longitude.toFixed(4)) ||
      screenCenterPos.latitude === parseFloat(refetchPos.latitude.toFixed(4))
    ) {
      return;
    }
    setShowRefreshPressable(true);
  }, [screenCenterPos]);

  useEffect(() => {
    if (!isFetching) {
      setShowRefreshPressable(false);
    }
  }, [isFetching]);

  //가장 가까이 있는 marker focused로 변경
  useEffect(() => {
    if (data?.data.content[0]) {
      dispatch(focusBooth(data?.data.content[0]));
    }
  }, [data?.data.content]);

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

  //태그 데이터 모아서 보내기
  const filteredTag = useSelector((state: RootState) => state.mapReducer.filteredTag);
  const filteredBrand = useSelector((state: RootState) => state.mapReducer.filteredBrand);
  useEffect(() => {
    const nextTagData = Object.entries(filteredTag)
      .map(item => {
        if (item[1]) {
          return parseInt(item[0], 10);
        }
        return;
      })
      .filter(item => {
        if (item) {
          return item;
        }
      });
    const nextBrandData = Object.entries(filteredBrand)
      .map(item => {
        if (item[1]) {
          return parseInt(item[0], 10);
        }
        return;
      })
      .filter(item => {
        if (item) {
          return item;
        }
      });
    if (nextTagData || nextBrandData) {
      setSelectTagArr([...nextTagData, ...nextBrandData]);
    }
  }, [filteredTag, filteredBrand]);

  useEffect(() => {
    setRetchPos(screenCenterPos);
    refetch();
  }, [selectTagArr]);

  const currentPositionOnPress = () => {
    const getDataOnMap = async () => {
      const permission = await requestLocationPermission();
      if (permission !== 'granted') {
        return;
      }
      const {longitude, latitude} = await getGeolocation();
      mapRef.current?.animateToCoordinate({longitude: longitude, latitude: latitude});
    };
    getDataOnMap();
  };

  return (
    <ContainerView>
      <NaverMap
        mapRef={mapRef}
        centerPos={screenCenterPos}
        refetchPos={refetchPos}
        setScreenPos={setScreenCenterPos}
        data={data?.data}
      />
      <FilterWrapper>
        <MapFilterOrganism />
      </FilterWrapper>
      <CurrentPositionPressable onPress={currentPositionOnPress}>
        <CrosshairIcon />
      </CurrentPositionPressable>

      <RefreshPressableWrapper>
        {showRefreshPressable && !isLoading && (
          <MapRefreshSearchPressable onPress={refetchOnPress}>
            이 지역 재검색
          </MapRefreshSearchPressable>
        )}
      </RefreshPressableWrapper>
    </ContainerView>
  );
};

export default MapNaverMapOrganism;
