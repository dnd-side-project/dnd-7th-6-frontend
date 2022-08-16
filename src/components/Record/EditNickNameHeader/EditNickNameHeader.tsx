import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import {
  BackButtonWrapper,
  Container,
  FinishButton,
  FinishTitle,
  Title,
} from './EditNickNameHeader.styles';

import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import usePatchNickName from 'src/querys/usePatchNickName';

interface Props {
  onPressBack: () => void;
  isSuccess: boolean;
  name: string;
}

const EditNickNameHeader = ({children, onPressBack, isSuccess, name}: PropsWithChildren<Props>) => {
  const {mutate} = usePatchNickName();
  const navigation = useNavigation();
  const onPressSuccess = async () => {
    await mutate(name);
    navigation.goBack();
  };
  return (
    <Container>
      <BackButtonWrapper>
        <PressableLeftArrowIcon onPress={onPressBack} />
      </BackButtonWrapper>
      <Title>{children}</Title>
      <FinishButton onPress={isSuccess ? onPressSuccess : () => {}}>
        <FinishTitle isSuccess={isSuccess}>완료</FinishTitle>
      </FinishButton>
    </Container>
  );
};

export default EditNickNameHeader;
