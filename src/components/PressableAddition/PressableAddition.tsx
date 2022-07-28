import React, {PropsWithChildren} from 'react';

import {Container, PressableAdditionText} from './PressableAddition.styles';

const PressableAddition = ({children}: PropsWithChildren) => {
  return (
    <Container>
      <PressableAdditionText>{children}</PressableAdditionText>
    </Container>
  );
};

export default PressableAddition;
