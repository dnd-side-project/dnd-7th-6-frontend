import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import RecordScreen from './RecordScreen';
import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

export type RecordParamList = {
  RecordScreen: undefined;
  SettingScreen: undefined;
};

const RouteRecordScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Record" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Record" component={RecordScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default RouteRecordScreen;
