import BottomSheet from '@gorhom/bottom-sheet';
import React, {useEffect, useMemo, useRef} from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import * as Swiper from 'react-native-swiper';
import {useDispatch, useSelector} from 'react-redux';

import BrandFilter from '../FilterPages/BrandFilter';
import FrameFilter from '../FilterPages/FrameFilter';
import HeadcountFilter from '../FilterPages/HeadcountFilter';
import PoseFilter from '../FilterPages/PoseFilter';
import FilterSheetBackdrop from '../FilterSheetBackdrop';
import FilterSheetFooter from '../FilterSheetFooter';
import FilterSheetNavigator from '../FilterSheetNavigator';

import {changeFocus, closeFilterSheet, openFilterSheet} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';

const FilterSheetOrganism = ({title}: {title?: string}) => {
  const isOpenFilterSheet = useSelector((state: RootState) => state.postReducer.isOpenFilterSheet);
  const focused = useSelector((state: RootState) => state.postReducer.focusedFilter);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const swiperRef = useRef<Swiper.default>(null);
  const snapPoints = useMemo(() => [1, heightPercentage(640)], []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!swiperRef) {
      return;
    }
    if (!swiperRef.current) {
      return;
    }
    swiperRef.current.scrollTo(focused);
  }, [focused]);

  return (
    <BottomSheet
      snapPoints={snapPoints}
      index={isOpenFilterSheet ? 1 : 0}
      ref={bottomSheetRef}
      onChange={i => dispatch(!i ? closeFilterSheet() : openFilterSheet())}
      backdropComponent={() => <FilterSheetBackdrop title={title} />}
      footerComponent={FilterSheetFooter}
      handleIndicatorStyle={{
        width: widthPercentage(80),
        backgroundColor: theme.colors.grayscale[5],
      }}>
      <FilterSheetNavigator />
      <Swiper.default
        horizontal={true}
        ref={swiperRef}
        showsPagination={false}
        loop={false}
        onIndexChanged={idx => dispatch(changeFocus(idx))}>
        <BrandFilter />
        <HeadcountFilter />
        <PoseFilter />
        <FrameFilter />
      </Swiper.default>
    </BottomSheet>
  );
};

export default gestureHandlerRootHOC(FilterSheetOrganism);
