import BottomSheet from '@gorhom/bottom-sheet';
import React, {useEffect, useMemo, useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import * as Swiper from 'react-native-swiper';
import {useDispatch, useSelector} from 'react-redux';

import CardListOrganism from '../CardListOrganism';
import FilterOrganism from '../FilterOrganism';
import BrandFilter from '../FilterPages/BrandFilter';
import HeadcountFilter from '../FilterPages/HeadcountFilter';
import PoseFilter from '../FilterPages/PoseFilter/PoseFilter';
import FilterSheetNavigator from '../FilterSheetNavigator/FilterSheetNavigator';

import {closeFilterSheet, openFilterSheet} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import {Header} from 'src/screens/RecommendScreen/PostListDetailScreen.header';
import {heightPercentage} from 'src/styles/ScreenResponse';

const FilterSheetOrganism = () => {
  const isOpenFilterSheet = useSelector((state: RootState) => state.postReducer.isOpenFilterSheet);
  const focused = useSelector((state: RootState) => state.postReducer.focusedFilter);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const swiperRef = useRef<Swiper.default>(null);
  const snapPoints = useMemo(() => [1, heightPercentage(500)], []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!swiperRef) {
      return;
    }
    if (!swiperRef.current) {
      return;
    }
    swiperRef.current.scrollTo(focused + 1);
  }, [focused]);

  return (
    <>
      <BottomSheet
        snapPoints={snapPoints}
        index={isOpenFilterSheet ? 1 : 0}
        ref={bottomSheetRef}
        onChange={i => dispatch(!i ? closeFilterSheet() : openFilterSheet())}
        backdropComponent={() => (
          <SafeAreaView>
            <Header />
            <FilterOrganism />
            <CardListOrganism />
          </SafeAreaView>
        )}>
        <FilterSheetNavigator />
        <Swiper.default horizontal={true} ref={swiperRef} showsPagination={false}>
          <BrandFilter />
          <HeadcountFilter />
          <PoseFilter />
          <View />
        </Swiper.default>
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(FilterSheetOrganism);
