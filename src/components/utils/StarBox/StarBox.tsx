import React from 'react';

import {Container} from './StarBox.styles';

import StarIcon16 from 'src/icons/StarIcon16';

interface Props {
  score: number;
}

const StarBox = ({score}: Props) => {
  const count = Math.round(score);
  const isActiveStars = Array.from({length: 5}).map((_, i) => i < count);

  return (
    <Container>
      {isActiveStars.map((isActive, i) => (
        <StarIcon16 isActive={isActive} key={i} />
      ))}
    </Container>
  );
};

export default StarBox;
