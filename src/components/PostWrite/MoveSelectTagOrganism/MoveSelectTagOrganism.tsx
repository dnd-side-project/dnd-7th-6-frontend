import React from 'react';

import {Container, Label, style} from './MoveSelectTagOrganism.styles';

import {PressableRightArrowIcon} from 'src/components/utils/Pressables/PressableIcons';

const SelectTagOrganism = () => {
  return (
    <Container>
      <Label>사진 태그를 선택해보세요</Label>
      <PressableRightArrowIcon style={style.RightArrow} />
    </Container>
  );
};

export default SelectTagOrganism;
