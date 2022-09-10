import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CardListOrganism from '../CardListOrganism';
import FilterOrganism from '../FilterOrganism';
import {Blocking, HeaderContainer, HeaderTitle, TitleContainer} from './FilterSheetBackdrop.styles';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {FILTER} from 'src/constants/filters';
import {clearFilter, closeFilterSheet} from 'src/redux/actions/PostAction';
import {setCustomTagKeyword} from 'src/redux/actions/RecommendAction';
import {RootState} from 'src/redux/store';

const FilterSheetBackdrop = ({title}: {title?: string}) => {
  const {isOpenFilterSheet} = useSelector((state: RootState) => state.postReducer);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlePressBackdrop = () => {
    dispatch(closeFilterSheet());
  };
  const handleLeftBackHeader = () => {
    dispatch(clearFilter());
    navigation.navigate('Recommend' as never);
  };
  const handleTitleContainer = () => {
    if (title) {
      dispatch(setCustomTagKeyword(title));
    }
    dispatch(clearFilter(FILTER.CUSTOM));
    navigation.goBack();
  };

  useEffect(() => {
    const clearReduxFilter = navigation.addListener('beforeRemove', () => dispatch(clearFilter()));
    return clearReduxFilter;
  });

  return (
    <SafeAreaView>
      {title ? (
        <HeaderContainer>
          <LeftBackHeader onPressBack={handleLeftBackHeader} />
          <TitleContainer onPress={handleTitleContainer}>
            <HeaderTitle>{title}</HeaderTitle>
          </TitleContainer>
        </HeaderContainer>
      ) : (
        <LeftBackHeader
          onPressBack={() => {
            navigation.goBack();
            dispatch(clearFilter());
          }}>
          포스트
        </LeftBackHeader>
      )}

      <FilterOrganism />
      <CardListOrganism />
      {!isOpenFilterSheet || <Blocking onPress={handlePressBackdrop} />}
    </SafeAreaView>
  );
};

export default FilterSheetBackdrop;
