import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {ChipWrapper, Container} from './FilterOrganism.styles';

import OptionChip from 'src/components/Chip/OptionChip';
import useFilteredItem from 'src/hooks/useFilteredItem';
import {openFilterSheet, changeFocus} from 'src/redux/actions/PostAction';

const FilterOrganism = () => {
  const labels = ['브랜드', '인원', '포즈컨셉', '프레임'];
  const {getCountOfSelected, getFirstSelected} = useFilteredItem();
  const dispatch = useDispatch();

  const handlePressFilterChip = (index: number) => () => {
    dispatch(openFilterSheet());
    dispatch(changeFocus(index));
  };
  const getChipContents = (index: number) => {
    const countOfSelected = getCountOfSelected(index);
    const firstSelected = getFirstSelected(index);
    if (!countOfSelected) {
      return labels[index];
    }
    return `${firstSelected?.index} ${countOfSelected}`;
  };

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[0, 1, 2, 3].map(index => (
          <ChipWrapper key={index}>
            <OptionChip active={!!getCountOfSelected(index)} onPress={handlePressFilterChip(index)}>
              {getChipContents(index)}
            </OptionChip>
          </ChipWrapper>
        ))}
      </ScrollView>
    </Container>
  );
};

export default FilterOrganism;
