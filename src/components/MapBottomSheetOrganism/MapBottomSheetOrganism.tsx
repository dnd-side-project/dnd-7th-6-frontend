import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {useMemo, useRef} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import BoothSummaryView from '../BoothSummaryView';
import MapNaverMapOrganism from '../MapNaverMapOrganism';
import {BottomSheetConatiner, bottomSheetStyle, handleStyle} from './MapBottomSheetOrganism.styles';

import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {PhotoBooth} from 'src/types';

const MapBottomSheetOrganism = () => {
  const sheetIndex = useSelector((state: RootState) => state.mapReducer.bottomSheetHeightIndex);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(
    () => [heightPercentage(145), heightPercentage(400), heightPercentage(630)],
    [],
  );
  const {data} = useGetPhotoBoothLocation({longitude: 0, latitude: 0});
  return (
    <BottomSheetConatiner>
      <BottomSheet
        style={bottomSheetStyle}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        backdropComponent={MapNaverMapOrganism}
        handleIndicatorStyle={handleStyle}
        index={sheetIndex}>
        <BottomSheetFlatList
          data={data?.data}
          renderItem={({item}: {item: PhotoBooth}) => <BoothSummaryView {...item} />}
        />
      </BottomSheet>
    </BottomSheetConatiner>
  );
};

export default gestureHandlerRootHOC(MapBottomSheetOrganism);
