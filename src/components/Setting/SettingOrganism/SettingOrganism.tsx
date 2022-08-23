import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {logout} from '@react-native-seoul/kakao-login';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, SafeAreaView} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage/';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import {
  Container,
  ListContainer,
  ListTitle,
  LogOutPressable,
  LogOutText,
} from './SettingOrganism.styles';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useDeleteUser from 'src/querys/useDeleteUser';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {RootState} from 'src/redux/store';
const SettingOrganism = () => {
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.isLoggedIn);
  const userInfo = useSelector((state: RootState) => state.userReducer.userInfo);
  const queryClient = useQueryClient();
  const {mutate} = useDeleteUser();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    const provider = userInfo?.provider;
    if (provider === 'GOOGLE') {
      await GoogleSignin.signOut();
    } else if (provider === 'KAKAO') {
      await logout();
    } else if (provider === 'APPLE') {
    }
    await EncryptedStorage.removeItem('refreshToken');
    dispatch(setAccessToken(''));
    dispatch(changeUserInfo({}));
    dispatch(loginAction(false));
    queryClient.invalidateQueries();
    navigation.goBack();
  };

  const handleDeleteUser = () => {
    Alert.alert(
      '회원탈퇴',
      '회원탈퇴 이후에 제보했던 가게와 작성한 댓글을 더이상 볼 수 없어요.\n정말로 탈퇴하시겠어요?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: async () => {
            await mutate();
            navigation.reset({routes: [{name: 'AppInner' as never}]});
          },
        },
      ],
    );
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
          <ListContainer onPress={handleDeleteUser}>
            <ListTitle>회원탈퇴</ListTitle>
          </ListContainer>
        )}
      </Container>
    </SafeAreaView>
  );
};
export default SettingOrganism;
