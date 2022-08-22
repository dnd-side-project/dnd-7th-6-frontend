import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';

import getAccessToken from 'src/apis/getAccessToken';
import getUser from 'src/apis/getUser';
import TabBar from 'src/components/utils/TabBar';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {RootState} from 'src/redux/store';
import RouteBoothScreen from 'src/screens/BoothScreen';
import RouteRecommendScreen from 'src/screens/RecommendScreen';
import RouteRecordScreen from 'src/screens/RecordScreen';
import StorageScreen from 'src/screens/StorageScreen/StorageScreen';

const Tab = createBottomTabNavigator();

const AppInner = () => {
  const dispatch = useDispatch();
  const {accessToken: newToken, isSettingInterceptor} = useSelector(
    (state: RootState) => state.userReducer,
  );

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await EncryptedStorage.getItem('refreshToken');
        if (!token) {
          SplashScreen.hide();
          return;
        }
        dispatch(loginAction(true));
        const newAccessToken = await getAccessToken(token);
        dispatch(setAccessToken(newAccessToken));
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);

  useEffect(() => {
    if (!newToken) {
      return;
    }
    if (!isSettingInterceptor) {
      return;
    }
    const getUserData = async () => {
      const user = await getUser();
      dispatch(changeUserInfo(user));
      SplashScreen.hide();
    };
    getUserData();
  }, [newToken, isSettingInterceptor]);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={'RouteRecommendScreen'}
        component={RouteRecommendScreen}
        options={{tabBarLabel: '추천'}}
      />
      <Tab.Screen
        name={'BoothScreen'}
        component={RouteBoothScreen}
        options={{tabBarLabel: '위치'}}
      />
      <Tab.Screen name={'StorageScreen'} component={StorageScreen} options={{tabBarLabel: '찜'}} />
      <Tab.Screen
        name={'RouteRecordScreen'}
        component={RouteRecordScreen}
        options={{tabBarLabel: '기록'}}
      />
    </Tab.Navigator>
  );
};

export default AppInner;
