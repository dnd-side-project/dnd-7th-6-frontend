import React, {PropsWithChildren} from 'react';

import {Container, ChipText, Mode, chipTheme, chipTextTheme} from './Chip.styles';

export interface Props {
  mode?: Mode;
}

const Chip = ({children, mode = 'dark'}: PropsWithChildren<Props>) => {
  return (
    <Container style={chipTheme[mode]}>
      <ChipText style={chipTextTheme[mode]}>{children}</ChipText>
    </Container>
  );
};

export default Chip;
