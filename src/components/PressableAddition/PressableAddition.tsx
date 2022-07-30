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

const PressableAddition = (props: PressableProps & PropsWithChildren, {mode = 'bright'}: Props) => {
  return (
    <Container style={pressableContainerTheme[mode]} {...props}>
      <PressableAdditionText style={pressableAdditionTextTheme[mode]}>
        {props.children}
      </PressableAdditionText>
    </Container>
  );
};

export default PressableAddition;
