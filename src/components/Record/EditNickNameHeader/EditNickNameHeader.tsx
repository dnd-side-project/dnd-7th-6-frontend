import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {useDispatch} from 'react-redux';

import {
  BackButtonWrapper,
  Container,
  FinishButton,
  FinishTitle,
  Title,
} from './EditNickNameHeader.styles';

import getUser from 'src/apis/getUser';
import {PressableLeftArrowIcon} from 'src/components/utils/Pressables/PressableIcons';
import useLogout from 'src/hooks/useLogout';
import usePatchNickName from 'src/querys/usePatchNickName';
import {changeUserInfo} from 'src/redux/actions/UserAction';

interface Props {
  onPressBack: () => void;
  isSuccess: boolean;
  name: string;
}

const EditNickNameHeader = ({children, onPressBack, isSuccess, name}: PropsWithChildren<Props>) => {
  const {mutate} = usePatchNickName();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logout = useLogout();
  const onPressSuccess = () => {
    mutate(name, {
      onSuccess: async () => {
        const user = await getUser();
        if (!['KAKAO', 'APPLE', 'GOOGLE'].includes(user.provider)) {
          logout();
        }
        dispatch(changeUserInfo(user));
        navigation.goBack();
      },
    });
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
