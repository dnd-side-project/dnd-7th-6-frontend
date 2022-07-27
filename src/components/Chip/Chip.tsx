import React, {PropsWithChildren} from 'react';

import {Container, ChipText} from './Chip.styles';

export interface Props {
  mode?: 'bright' | 'dark';
}

const Chip = ({children, mode = 'dark'}: PropsWithChildren<Props>) => {
  return (
    <Container mode={mode}>
      <ChipText mode={mode}>{children}</ChipText>
    </Container>
  );
};

export default Chip;
