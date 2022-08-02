import BottomSheet from '@gorhom/bottom-sheet';
import React, {useMemo, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import BoothSummaryView from '../BoothSummaryView';
import {bottomSheetStyle, handleStyle} from './MapBottomSheetOrganism.styles';

import BoothSummaryData from 'src/BoothSummaryData';
import {heightPercentage} from 'src/styles/ScreenResponse';

const MapBottomSheetOrganism = () => {
  const [sheetIndex, setSheetIndex] = useState(-1);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(
    () => [heightPercentage(145), heightPercentage(400), heightPercentage(630)],
    [],
  );

  return (
    <>
      <BottomSheet
        style={bottomSheetStyle}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        handleIndicatorStyle={handleStyle}
        index={sheetIndex}>
        <FlatList
          data={BoothSummaryData}
          renderItem={info => <BoothSummaryView {...info.item} key={info.item.id} />}
        />
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(MapBottomSheetOrganism);
