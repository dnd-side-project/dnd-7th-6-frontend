import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {PropsWithChildren, useEffect} from 'react';
import {Config} from 'react-native-config';
import EncryptedStorage from 'react-native-encrypted-storage';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';

import getAccessToken from 'src/apis/getAccessToken';
import getUser from 'src/apis/getUser';
import useLogout from 'src/hooks/useLogout';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';

const UserProvider = ({children}: PropsWithChildren<{}>) => {
  const dispatch = useDispatch();
  const logout = useLogout();

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: Config.IOS_GOOGLE_API_KEY,
    });
    const getToken = async () => {
      try {
        const token = await EncryptedStorage.getItem('refreshToken');
        if (!token) {
          SplashScreen.hide();
          return;
        }
        dispatch(loginAction(true));
        SplashScreen.hide();

        const newAccessToken = await getAccessToken(token);
        dispatch(setAccessToken(newAccessToken));
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const user = await getUser();
        if (!['KAKAO', 'APPLE', 'GOOGLE'].includes(user.provider)) {
          logout();
        }
        dispatch(changeUserInfo(user));
        SplashScreen.hide();
      } catch (error) {
        SplashScreen.hide();
      }
    };
    getUserData();
  }, []);

  return <>{children}</>;
};

export default UserProvider;
