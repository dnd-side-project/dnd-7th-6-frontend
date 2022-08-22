import React from 'react';
import {GestureResponderEvent, PressableProps} from 'react-native';

import {PressableCancelIcon} from '../utils/Pressables/PressableIcons';
import {Container, Count, Title} from './FilterChip.styles';

interface Props {
  title: string;
  selected: boolean;
  count?: number;
  onPressDeleteIcon?: (event?: GestureResponderEvent) => void;
  isGray?: boolean;
}

const FilterChip = ({
  title,
  count,
  selected,
  onPressDeleteIcon,
  isGray,
  ...props
}: Props & PressableProps) => {
  return (
    <Container selected={selected} isExistDelete={!!onPressDeleteIcon} isGray={isGray} {...props}>
      <Title selected={selected} isGray={isGray}>
        {title}
      </Title>
      {count === undefined || <Count selected={selected}>{count}</Count>}
      {onPressDeleteIcon && <PressableCancelIcon onPress={onPressDeleteIcon} />}
    </Container>
  );
};

export default FilterChip;
