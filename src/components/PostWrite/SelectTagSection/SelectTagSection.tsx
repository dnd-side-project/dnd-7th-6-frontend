import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

import {ChipContainer, ChipWrapper, Container, TypeOfTag} from './SelectTagSection.styles';

import OptionChip from 'src/components/Chip/OptionChip';
import {Tag} from 'src/types';

interface Props {
  tagsByType: Tag[];
  type: string;
}

const SelectTagSection = ({tagsByType, type}: PropsWithChildren<Props>) => {
  return (
    <Container>
      <View>
        <TypeOfTag>{type}</TypeOfTag>
        <ChipContainer>
          {tagsByType.map(tag => (
            <ChipWrapper key={tag.id}>
              <OptionChip>{tag.title}</OptionChip>
            </ChipWrapper>
          ))}
        </ChipContainer>
      </View>
    </Container>
  );
};

export default SelectTagSection;
