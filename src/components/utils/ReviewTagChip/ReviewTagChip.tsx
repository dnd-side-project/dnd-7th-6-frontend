import React from 'react';

import {Container, TagTitle} from './ReviewTagChip.styles';

import Heart18 from 'src/icons/Heart18';
import {Tag} from 'src/types';

const ReviewTagChip = (tag: Tag) => {
  return (
    <Container>
      {tag.tagType === 'CUSTOM' || <Heart18 />}
      <TagTitle>{tag.title}</TagTitle>
    </Container>
  );
};

export default ReviewTagChip;
