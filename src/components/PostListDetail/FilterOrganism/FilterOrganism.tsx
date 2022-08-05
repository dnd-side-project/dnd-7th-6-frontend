import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {ChipWrapper, Container} from './FilterOrganism.styles';

import OptionChip from 'src/components/Chip/OptionChip';
import {openFilterSheet, changeFocus} from 'src/redux/actions/PostAction';

const FilterOrganism = () => {
  const dispatch = useDispatch();

  const handlePressFilterChip = (index: number) => () => {
    dispatch(openFilterSheet());
    dispatch(changeFocus(index));
  };

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ChipWrapper>
          <OptionChip>인기순</OptionChip>
        </ChipWrapper>
        <ChipWrapper>
          <OptionChip onPress={handlePressFilterChip(0)}>브랜드</OptionChip>
        </ChipWrapper>
        <ChipWrapper>
          <OptionChip onPress={handlePressFilterChip(1)}>인원</OptionChip>
        </ChipWrapper>
        <ChipWrapper>
          <OptionChip onPress={handlePressFilterChip(2)}>포즈컨셉</OptionChip>
        </ChipWrapper>
        <ChipWrapper>
          <OptionChip onPress={handlePressFilterChip(3)}>프레임</OptionChip>
        </ChipWrapper>
      </ScrollView>
    </Container>
  );
};

export default FilterOrganism;
