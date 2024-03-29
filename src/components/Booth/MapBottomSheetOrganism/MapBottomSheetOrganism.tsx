import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useHeaderHeight} from '@react-navigation/elements';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {type Coord} from 'react-native-nmap';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useSelector} from 'react-redux';

import BoothSummaryView from '../BoothSummaryView';
import MapNaverMapOrganism from '../MapNaverMapOrganism';
import {
  BottomSheetConatiner,
  bottomSheetStyle,
  handleStyle,
  NoDataContainer,
  NoDataText,
} from './MapBottomSheetOrganism.styles';

import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {PhotoBoothContentData} from 'src/types';
import valueOfPlatform from 'src/utils/valueOfPlatform';

const MapBottomSheetOrganism = () => {
  const sheetIndex = useSelector((state: RootState) => state.mapReducer.bottomSheetHeightIndex);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const headerHeight = useHeaderHeight();
  const snapPoints = useMemo(
    () => [
      heightPercentage(145),
      valueOfPlatform({
        ios: heightPercentage(685) - getStatusBarHeight(true),
        android: heightPercentage(685) - headerHeight,
      }),
    ],
    [],
  );
  const focusedBooth = useSelector((state: RootState) => state.mapReducer.focusBooth);
  const initCoord: Coord = {longitude: 0, latitude: 0};
  const {data} = useGetPhotoBoothLocation({coord: initCoord});
  const [filteredBoothData, setFilteredBoothData] = useState<PhotoBoothContentData[]>();

  useEffect(() => {
    const filteringData = async () => {
      if (!data?.data || !focusedBooth) {
        return;
      }
      const changeData = await [
        focusedBooth,
        ...data?.data.content.filter((item: PhotoBoothContentData) => {
          if (item !== focusedBooth) {
            return item;
          }
        }),
      ];
      setFilteredBoothData(changeData);
    };
    filteringData();
  }, [focusedBooth]);

  return (
    <BottomSheetConatiner>
      <BottomSheet
        style={bottomSheetStyle}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        backdropComponent={MapNaverMapOrganism}
        handleIndicatorStyle={handleStyle}
        index={sheetIndex}>
        {data?.data.content.length > 0 ? (
          <BottomSheetFlatList
            data={filteredBoothData}
            renderItem={({item, index}: {item: PhotoBoothContentData; index: number}) => {
              return index === 0 ? (
                focusedBooth && <BoothSummaryView {...focusedBooth} />
              ) : item.photoBooth.id !== focusedBooth?.photoBooth.id ? (
                <BoothSummaryView {...item} />
              ) : (
                <></>
              );
            }}
          />
        ) : (
          <NoDataContainer>
            <NoDataText>검색 결과가 없어요. 다시 검색해 주세요.</NoDataText>
          </NoDataContainer>
        )}
      </BottomSheet>
    </BottomSheetConatiner>
  );
};

export default gestureHandlerRootHOC(MapBottomSheetOrganism);
