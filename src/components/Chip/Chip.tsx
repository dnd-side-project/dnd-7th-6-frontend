import React, {PropsWithChildren} from 'react';

import {Container, ChipText} from './Chip.styles';

const Chip = ({children}: PropsWithChildren) => {
  return (
    <Container>
      <ChipText>{children}</ChipText>
    </Container>
  );
};

export default Chip;
