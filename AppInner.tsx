import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';

import TabBar from 'src/components/utils/TabBar';
import RouteBoothScreen from 'src/screens/BoothScreen';
import RouteRecommendScreen from 'src/screens/RecommendScreen';
import RouteRecordScreen from 'src/screens/RecordScreen';
import StorageScreen from 'src/screens/StorageScreen/StorageScreen';

const Tab = createBottomTabNavigator();

const AppInner = () => {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        navigation.navigate('InitPermissionScreen' as never);
      }
    });
  }, []);

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
