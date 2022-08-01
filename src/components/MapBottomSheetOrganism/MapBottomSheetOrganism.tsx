import BottomSheet from '@gorhom/bottom-sheet';
import React, {useMemo, useRef} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import {bottomSheetStyle, handleStyle} from './MapBottomSheetOrganism.styles';

const MapBottomSheetOrganism = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '70%'], []);

  return (
    <>
      <BottomSheet
        style={bottomSheetStyle}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        handleIndicatorStyle={handleStyle}
      />
    </>
  );
};

export default gestureHandlerRootHOC(MapBottomSheetOrganism);
