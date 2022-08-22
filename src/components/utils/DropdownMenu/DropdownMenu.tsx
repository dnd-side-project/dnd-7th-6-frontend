import React from 'react';

import {Element, Label, List} from './DropdownMenu.styles';

interface Props {
  items: Item[];
}

interface Item {
  name: string;
  onPressItem: () => void;
}

const DropdownMenu = ({items}: Props) => {
  return (
    <List>
      {items.map(({name, onPressItem}, i) => (
        <Element key={name} onPress={onPressItem} isLast={i === items.length - 1}>
          <Label>{name}</Label>
        </Element>
      ))}
    </List>
  );
};

export default DropdownMenu;
