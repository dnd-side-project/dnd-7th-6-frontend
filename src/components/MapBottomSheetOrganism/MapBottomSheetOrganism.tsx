import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useHeaderHeight} from '@react-navigation/elements';
import React, {useEffect, useMemo, useRef} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import BoothSummaryView from '../BoothSummaryView';
import MapNaverMapOrganism from '../MapNaverMapOrganism';
import {BottomSheetConatiner, bottomSheetStyle, handleStyle} from './MapBottomSheetOrganism.styles';

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
      heightPercentage(130),
      valueOfPlatform({
        ios: heightPercentage(630),
        android: heightPercentage(640) - headerHeight,
      }),
    ],
    [],
  );
  const focusedBooth = useSelector((state: RootState) => state.mapReducer.focusBooth);

  const {data} = useGetPhotoBoothLocation({longitude: 0, latitude: 0});
  useEffect(() => {
    // if (data?.data.content.length) {
    //   dispatch(changeBottomSheetHeight(1));
    // } else {
    //   dispatch(changeBottomSheetHeight(0));
    // }
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
          renderItem={({item, index}: {item: PhotoBoothContentData; index: number}) =>
            index === 0 ? (
              focusedBooth !== null ? (
                <BoothSummaryView {...focusedBooth} />
              ) : (
                <BoothSummaryView {...item} />
              )
            ) : item.photoBooth.id !== focusedBooth?.photoBooth.id ? (
              <BoothSummaryView {...item} />
            ) : (
              <></>
            )
          }
        />
      </BottomSheet>
    </BottomSheetConatiner>
  );
};

export default gestureHandlerRootHOC(MapBottomSheetOrganism);
