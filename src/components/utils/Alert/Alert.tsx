import React from 'react';
import {GestureResponderEvent} from 'react-native';

import {
  Backdrop,
  ButtonContainer,
  CancelButton,
  CancelButtonText,
  CheckButton,
  CheckButtonText,
  Modal,
  SubTitle,
  Title,
} from './Alert.styles';

interface Props {
  title: string;
  subTitle?: string;
  cancelButtonText: string;
  checkButtonText: string;
  onPressCancel?: (event: GestureResponderEvent) => void;
  onPressCheck?: (event: GestureResponderEvent) => void;
}

const Alert = (props: Props) => {
  return (
    <Backdrop>
      <Modal>
        <Title>{props.title}</Title>
        <SubTitle>{props.subTitle}</SubTitle>
        <ButtonContainer>
          <CancelButton onPress={props.onPressCancel}>
            <CancelButtonText>{props.cancelButtonText}</CancelButtonText>
          </CancelButton>
          <CheckButton onPress={props.onPressCheck}>
            <CheckButtonText>{props.checkButtonText}</CheckButtonText>
          </CheckButton>
        </ButtonContainer>
      </Modal>
    </Backdrop>
  );
};

export default Alert;
