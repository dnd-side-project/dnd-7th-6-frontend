import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {ChipWrapper, Container} from './FilterOrganism.styles';

import OptionChip from 'src/components/Chip/OptionChip';
import useFilteredItem from 'src/hooks/useFilteredItem';
import useFilterTag from 'src/hooks/useFilterTag';
import {openFilterSheet, changeFocus, clearFilter} from 'src/redux/actions/PostAction';

const FilterOrganism = () => {
  const labels = ['브랜드', '인원', '포즈컨셉', '프레임'];
  const {getCountOfSelected, getFirstSelected} = useFilteredItem();
  const dispatch = useDispatch();
  const {getFilterTagById} = useFilterTag();

  const openFilter = (index: number) => {
    dispatch(changeFocus(index));
    dispatch(openFilterSheet());
  };
  const handlePressFilterChip = (index: number) => () => {
    openFilter(index);
  };
  const handlePressFilterChipIcon = (index: number, countOfSelected: number) => () => {
    if (countOfSelected) {
      dispatch(clearFilter(index));
    } else {
      openFilter(index);
    }
  };
  const getChipContents = (
    index: number,
    countOfSelected: number,
    firstSelected: ReturnType<typeof getFirstSelected>,
  ) => {
    if (!countOfSelected) {
      return labels[index];
    }
    return `${getFilterTagById(firstSelected?.index || 0)} ${countOfSelected}`;
  };

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {[0, 1, 2, 3].map(index => {
          const countOfSelected = getCountOfSelected(index);
          const firstSelected = getFirstSelected(index);

          return (
            <ChipWrapper key={index}>
              <OptionChip
                active={!!countOfSelected}
                onPress={handlePressFilterChip(index)}
                onPressIcon={handlePressFilterChipIcon(index, countOfSelected)}>
                {getChipContents(index, countOfSelected, firstSelected)}
              </OptionChip>
            </ChipWrapper>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default FilterOrganism;
