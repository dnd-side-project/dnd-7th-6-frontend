import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';

import {ButtonTitle, SubmitButtonContainer} from './PressableSubmit.styles';

const PressableSubmit = ({children, ...props}: PropsWithChildren<PressableProps>) => {
  return (
    <SubmitButtonContainer {...props}>
      <ButtonTitle disabled={props.disabled}>{children}</ButtonTitle>
    </SubmitButtonContainer>
  );
};

export default PressableSubmit;
