import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {Element, Label, List} from './DropdownMenu.styles';

interface Props {
  items: Item[];
  style?: StyleProp<ViewStyle>;
}

interface Item {
  name: string;
  onPressItem: () => void;
}

const DropdownMenu = ({items, style}: Props) => {
  return (
    <List style={style}>
      {items.map(({name, onPressItem}, i) => (
        <Element onPress={onPressItem} isLast={i === items.length - 1}>
          <Label>{name}</Label>
        </Element>
      ))}
    </List>
  );
};

export default DropdownMenu;
