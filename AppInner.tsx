import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch, useSelector} from 'react-redux';

import getAccessToken from 'src/apis/getAccessToken';
import getUser from 'src/apis/getUser';
import TabBar from 'src/components/utils/TabBar';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {RootState} from 'src/redux/store';
import RouteBoothScreen from 'src/screens/BoothScreen';
import RouteRecommendScreen from 'src/screens/RecommendScreen';
import RecordScreen from 'src/screens/RecordScreen/RecordScreen';
import StorageScreen from 'src/screens/StorageScreen/StorageScreen';

const Tab = createBottomTabNavigator();

const AppInner = () => {
  const dispatch = useDispatch();
  const newToken = useSelector((state: RootState) => state.userReducer.accessToken);
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await EncryptedStorage.getItem('refreshToken');
        if (!token) {
          return;
        }
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
      if (newToken) {
        const user = await getUser();
        dispatch(changeUserInfo(user));
        dispatch(loginAction(true));
      }
    };
    getUserData();
  }, [newToken]);
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={'BoothScreen'}
        component={RouteBoothScreen}
        options={{tabBarLabel: '위치'}}
      />
      <Tab.Screen
        name={'RecommendScreen'}
        component={RouteRecommendScreen}
        options={{tabBarLabel: '추천'}}
      />
      <Tab.Screen name={'StorageScreen'} component={StorageScreen} options={{tabBarLabel: '찜'}} />
      <Tab.Screen name={'RecordScreen'} component={RecordScreen} options={{tabBarLabel: '기록'}} />
    </Tab.Navigator>
  );
};

export default AppInner;
