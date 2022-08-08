import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useHeaderHeight} from '@react-navigation/elements';
import React, {useEffect, useMemo, useRef} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import BoothSummaryView from '../BoothSummaryView';
import MapNaverMapOrganism from '../MapNaverMapOrganism';
import {BottomSheetConatiner, bottomSheetStyle, handleStyle} from './MapBottomSheetOrganism.styles';

import useGetPhotoBoothLocation from 'src/querys/useGetPhotoBoothLocation';
import {changeBottomSheetHeight} from 'src/redux/actions/MapAction';
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
      heightPercentage(30),
      heightPercentage(143),
      valueOfPlatform({
        ios: heightPercentage(666),
        android: heightPercentage(666) - headerHeight,
      }),
    ],
    [],
  );

  const {data} = useGetPhotoBoothLocation({longitude: 0, latitude: 0});
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(changeBottomSheetHeight(1));
    }
  }, [data]);

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
          data={data?.data.content}
          renderItem={({item}: {item: PhotoBoothContentData}) => <BoothSummaryView {...item} />}
        />
      </BottomSheet>
    </BottomSheetConatiner>
  );
};

export default gestureHandlerRootHOC(MapBottomSheetOrganism);
