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
  MapIndicator,
  RefreshPressableWrapper,
} from './MapNaverMapOrganism.styles';

import requestLocationPermission from 'src/hooks/requestLocationPermission';
import CrosshairIcon from 'src/icons/CrosshairIcon';
import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
import {focusBooth} from 'src/redux/actions/MapAction';
import {RootState} from 'src/redux/store';
import theme from 'src/styles/Theme';
import getGeolocation from 'src/utils/getGeolocation';
const MapNaverMapOrganism = () => {
  const mapRef = useRef<NaverMapView>(null);
  const [onInitialize, setOnInitialize] = useState<Boolean>(true);
  const [showRefreshPressable, setShowRefreshPressable] = useState<Boolean>(false);
  const searchedCoord: Coord = useSelector((state: RootState) => state.mapReducer.mapCoord);
  const [selectTagArr, setSelectTagArr] = useState<(number | undefined)[]>([]);
  const [screenCenterPos, setScreenCenterPos] = useState<Coord>({
    latitude: 0,
    longitude: 0,
  });
  const {data, refetch, isLoading} = useGetPhotoBoothLocation({
    coord: screenCenterPos,
    selectTagArr,
  });
  const dispatch = useDispatch();
  const refetchOnPress = () => {
    refetch();
    setShowRefreshPressable(false);
  };

  //첫 로딩시 현재 사용자 위치 가져오기
  useEffect(() => {
    mapRef.current?.setLocationTrackingMode(TrackingMode.Follow);
    const initMap = async () => {
      const permission = await requestLocationPermission();
      if (permission !== 'granted') {
        return;
      }
      const {longitude, latitude} = await getGeolocation();
      setScreenCenterPos({latitude: latitude, longitude: longitude});
      if (Platform.OS === 'android') {
        mapRef.current?.animateToCoordinate({latitude: latitude, longitude: longitude});
      }
    };
    initMap().then(() => setOnInitialize(false));
  }, []);

  //첫 로딩시 data refetching
  useEffect(() => {
    const initData = async () => {
      setShowRefreshPressable(false);
      await refetch();
    };
    initData();
  }, [onInitialize]);

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
      {isLoading && <MapIndicator size="large" color={theme.colors.primary[1].normal} />}
      <NaverMap
        mapRef={mapRef}
        centerPos={screenCenterPos}
        setScreenPos={setScreenCenterPos}
        data={data?.data}
        setShowRefreshPressable={setShowRefreshPressable}
        onInitialize={onInitialize}
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
