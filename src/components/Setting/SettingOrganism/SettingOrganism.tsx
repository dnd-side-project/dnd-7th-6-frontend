import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage/';
import {useDispatch, useSelector} from 'react-redux';

import {
  Container,
  ListContainer,
  ListTitle,
  LogOutPressable,
  LogOutText,
} from './SettingOrganism.styles';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {RootState} from 'src/redux/store';
const SettingOrganism = () => {
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);
  const userInfo = useSelector((state: RootState) => state.userReducer.userInfo);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    await EncryptedStorage.removeItem('refreshToken');
    dispatch(setAccessToken(''));
    dispatch(changeUserInfo({}));
    dispatch(loginAction(false));
    navigation.goBack();
  };
  const showProvider = (): string => {
    const provider = userInfo?.provider;
    if (provider === 'GOOGLE') {
      return '구글';
    } else if (provider === 'KAKAO') {
      return '카카오';
    } else if (provider === 'APPLE') {
      return '애플';
    } else {
      return '알 수 없는';
    }
  };
  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>설정</LeftBackHeader>
      <Container>
        {isLoggedIn && (
          <ListContainer>
            <ListTitle>{showProvider()} 계정 회원</ListTitle>
            <LogOutPressable onPress={handleLogOut}>
              <LogOutText>로그아웃</LogOutText>
            </LogOutPressable>
          </ListContainer>
        )}
        <ListContainer onPress={() => navigation.navigate('PersonalProcess' as never)}>
          <ListTitle>개인정보처리방침</ListTitle>
        </ListContainer>

        {isLoggedIn && (
          <ListContainer>
            <ListTitle>회원탈퇴</ListTitle>
          </ListContainer>
        )}
      </Container>
    </SafeAreaView>
  );
};
export default SettingOrganism;
