import React, {PropsWithChildren} from 'react';

import {ChipText, Container} from './RoundChip.styles';

export interface Props {
  mode?: 'dark' | 'gray' | 'bright';
}

const RoundChip = ({children, mode = 'dark'}: PropsWithChildren<Props>) => {
  return (
    <Container mode={mode}>
      <ChipText mode={mode}>{children}</ChipText>
    </Container>
  );
};

export default RoundChip;
