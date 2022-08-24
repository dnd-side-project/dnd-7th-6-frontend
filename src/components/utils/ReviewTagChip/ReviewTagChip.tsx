import React from 'react';
import {PressableProps} from 'react-native';

import {Container, IconWrapper, TagTitle} from './ReviewTagChip.styles';

import Heart18 from 'src/icons/Heart18';
import {Tag} from 'src/types';

interface Props {
  tag: Tag;
  props?: PressableProps;
}

const ReviewTagChip = ({tag, props}: Props) => {
  return (
    <Container {...props}>
      {tag.tagType === 'CUSTOM' || (
        <IconWrapper>
          <Heart18 />
        </IconWrapper>
      )}
      <TagTitle>{tag.title}</TagTitle>
    </Container>
  );
};

export default ReviewTagChip;
