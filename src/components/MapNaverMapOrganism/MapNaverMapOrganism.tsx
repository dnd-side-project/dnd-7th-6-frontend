import React, {useState, useRef} from 'react';

import MapRefreshSearchPressable from '../MapRefreshSearchPressable';
import NaverMap from '../NaverMap';
import {
  ContainerView,
  MapRefreshPressableWrapper,
  RefreshandSearchWrapper,
} from './MapNaverMapOrganism.styles';

import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
type positionType = {
  latitude: number;
  longitude: number;
};
const MapNaverMapOrganism = () => {
  const [showRefreshPressable, setShowRefreshPressable] = useState<Boolean>(true);
  const [screenCenterPos, setScreenCenterPos] = useState<positionType>({
    latitude: 0,
    longitude: 0,
  });
  const {data, refetch} = useGetPhotoBoothLocation({...screenCenterPos});
  const mapRef = useRef(null);
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
