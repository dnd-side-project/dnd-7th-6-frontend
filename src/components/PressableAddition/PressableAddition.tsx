import React, {PropsWithChildren} from 'react';

import {
  Container,
  Mode,
  PressableAdditionText,
  pressableAdditionTextTheme,
  pressableContainerTheme,
} from './PressableAddition.styles';

export interface Props {
  mode?: Mode;
}

const PressableAddition = ({children, mode = 'dark'}: PropsWithChildren<Props>) => {
  return (
    <Container style={pressableContainerTheme[mode]}>
      <PressableAdditionText style={pressableAdditionTextTheme[mode]}>
        {children}
      </PressableAdditionText>
    </Container>
  );
};

export default PressableAddition;
