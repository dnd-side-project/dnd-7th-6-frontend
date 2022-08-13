import React from 'react';

import {Container, IconWrapper, TagTitle} from './ReviewTagChip.styles';

import Heart18 from 'src/icons/Heart18';
import {Tag} from 'src/types';

const ReviewTagChip = (tag: Tag) => {
  return (
    <Container>
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
