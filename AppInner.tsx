import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import TabBar from 'src/components/utils/TabBar';
import RouteBoothScreen from 'src/screens/BoothScreen';
import RouteRecommendScreen from 'src/screens/RecommendScreen';
import RecordScreen from 'src/screens/RecordScreen/RecordScreen';
import StorageScreen from 'src/screens/StorageScreen/StorageScreen';

const Tab = createBottomTabNavigator();

const AppInner = () => {
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
