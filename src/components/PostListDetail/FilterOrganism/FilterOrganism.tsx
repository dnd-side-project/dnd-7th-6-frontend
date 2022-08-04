import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {ChipWrapper, Container, SortingButton} from './FilterOrganism.styles';

import OptionChip from 'src/components/Chip/OptionChip';

const FilterOrganism = () => {
  return (
    <Container>
      <SortingButton>인기순</SortingButton>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ChipWrapper>
          <OptionChip>브랜드</OptionChip>
        </ChipWrapper>
        <ChipWrapper>
          <OptionChip>인원</OptionChip>
        </ChipWrapper>
        <ChipWrapper>
          <OptionChip>포즈컨셉</OptionChip>
        </ChipWrapper>
        <ChipWrapper>
          <OptionChip>프레임</OptionChip>
        </ChipWrapper>
      </ScrollView>
    </Container>
  );
};

export default FilterOrganism;
