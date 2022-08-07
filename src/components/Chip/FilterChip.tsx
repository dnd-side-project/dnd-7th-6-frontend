import React from 'react';
import {PressableProps} from 'react-native';

import {Container, Count, Title} from './FilterChip.styles';

interface Props {
  title: string;
  selected: boolean;
  count?: number;
}

const FilterChip = ({title, count, selected, ...props}: Props & PressableProps) => {
  return (
    <Container selected={selected} {...props}>
      <Title selected={selected}>{title}</Title>
      {count === undefined || <Count selected={selected}>{count}</Count>}
    </Container>
  );
};

export default FilterChip;
