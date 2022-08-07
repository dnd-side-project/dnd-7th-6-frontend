import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {ChipWrapper, Container} from './FilterOrganism.styles';

import OptionChip from 'src/components/Chip/OptionChip';
import {openFilterSheet, changeFocus} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';
import getSelectedItems from 'src/utils/getSelectedItems';

const FilterOrganism = () => {
  const labels = ['브랜드', '인원', '포즈컨셉', '프레임'];
  const {filteredBrand, filteredHeadcount, filteredPose, filteredFrame} = useSelector(
    (state: RootState) => state.postReducer,
  );
  const filteredItems = useMemo(
    () => [
      getSelectedItems(filteredBrand),
      getSelectedItems(filteredHeadcount.number) || getSelectedItems(filteredHeadcount.relation),
      getSelectedItems(filteredPose.emotion) || getSelectedItems(filteredPose.situation),
      getSelectedItems(filteredFrame),
    ],
    [filteredBrand, filteredHeadcount, filteredPose, filteredFrame],
  );
  const isActive = (index: number) => !!filteredItems[index];
  const dispatch = useDispatch();

  const handlePressFilterChip = (index: number) => () => {
    dispatch(openFilterSheet());
    dispatch(changeFocus(index));
  };
  const getNumberOfSelected = (selected: any) => {
    return Object.keys(selected).filter(key => selected[key]).length;
  };
  const getFirstSelected = (selected: any) => {
    return Object.keys(selected).filter(key => selected[key])[0];
  };
  const getChipContents = (index: number) => {
    if (!isActive(index)) {
      return labels[index];
    }
    return `${getFirstSelected(filteredItems[index])} ${getNumberOfSelected(
      filteredItems[index] || {},
    )}`;
  };

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[0, 1, 2, 3].map(index => (
          <ChipWrapper key={index}>
            <OptionChip active={isActive(index)} onPress={handlePressFilterChip(index)}>
              {getChipContents(index)}
            </OptionChip>
          </ChipWrapper>
        ))}
      </ScrollView>
    </Container>
  );
};

export default FilterOrganism;
