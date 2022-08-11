import React from 'react';
import {GestureResponderEvent, PressableProps} from 'react-native';

import {PressableDeleteIcon} from '../utils/Pressables/PressableIcons';
import {Container, Count, Title} from './FilterChip.styles';

interface Props {
  title: string;
  selected: boolean;
  count?: number;
  onPressDeleteIcon?: (event?: GestureResponderEvent) => void;
}

const FilterChip = ({
  title,
  count,
  selected,
  onPressDeleteIcon,
  ...props
}: Props & PressableProps) => {
  return (
    <Container selected={selected} {...props}>
      <Title selected={selected}>{title}</Title>
      {count === undefined || <Count selected={selected}>{count}</Count>}
      {onPressDeleteIcon && <PressableDeleteIcon onPress={onPressDeleteIcon} />}
    </Container>
  );
};

export default FilterChip;
