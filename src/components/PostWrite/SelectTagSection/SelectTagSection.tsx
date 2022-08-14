import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';

import {ChipContainer, ChipWrapper, Container, TypeOfTag} from './SelectTagSection.styles';

import FilterChip from 'src/components/Chip/FilterChip';
import {Tag} from 'src/types';

interface Props {
  selects: {[id: number]: boolean | undefined};
  tagsByType: Tag[];
  type: string;
  onPressTag: (id: number) => () => void;
}

const SelectTagSection = ({selects, tagsByType, type, onPressTag}: PropsWithChildren<Props>) => {
  return (
    <Container>
      <View>
        <TypeOfTag>{type}</TypeOfTag>
        <ChipContainer>
          {tagsByType.map(tag => (
            <ChipWrapper key={tag.id}>
              <FilterChip
                selected={selects[tag.id] || false}
                title={tag.title}
                onPress={onPressTag(tag.id)}
              />
            </ChipWrapper>
          ))}
        </ChipContainer>
      </View>
    </Container>
  );
};

export default SelectTagSection;
