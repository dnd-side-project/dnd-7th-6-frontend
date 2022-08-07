import React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CardListOrganism from '../CardListOrganism';
import FilterOrganism from '../FilterOrganism';
import {Blocking} from './FilterSheetBackdrop.styles';

import {closeFilterSheet} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import {Header} from 'src/screens/RecommendScreen/PostListDetailScreen.header';

const FilterSheetBackdrop = () => {
  const {isOpenFilterSheet} = useSelector((state: RootState) => state.postReducer);
  const dispatch = useDispatch();

  const handlePressBackdrop = () => {
    dispatch(closeFilterSheet());
  };

  return (
    <SafeAreaView>
      <Header />
      <FilterOrganism />
      <CardListOrganism />
      {!isOpenFilterSheet || <Blocking onPress={handlePressBackdrop} />}
    </SafeAreaView>
  );
};

export default FilterSheetBackdrop;
