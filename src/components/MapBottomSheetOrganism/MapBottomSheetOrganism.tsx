import BottomSheet from '@gorhom/bottom-sheet';
import React, {useMemo, useRef, useState} from 'react';
import {Button} from 'react-native';

import {bottomSheetStyle, handleStyle} from './MapBottomSheetOrganism.styles';

const MapBottomSheetOrganism = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '70%'], []);
  const [sheetIndex, setSheetIndex] = useState(-1);

  return (
    <>
      <Button title="up" onPress={() => setSheetIndex(1)} />
      <Button title="center" onPress={() => setSheetIndex(0)} />
      <BottomSheet
        style={bottomSheetStyle}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        index={sheetIndex}
        handleIndicatorStyle={handleStyle}
      />
    </>
  );
};

export default MapBottomSheetOrganism;
