import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';

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

const PressableAddition = ({
  mode = 'bright',
  ...rest
}: PressableProps & PropsWithChildren<Props>) => {
  return (
    <Container style={pressableContainerTheme[mode]} {...rest}>
      <PressableAdditionText style={pressableAdditionTextTheme[mode]}>
        {rest.children}
      </PressableAdditionText>
    </Container>
  );
};

export default PressableAddition;
