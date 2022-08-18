import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import EditNameScreen from './EditNameScreen';
import RecordScreen from './RecordScreen';
import RouteSettingScreen from './SettingScreen';
const Stack = createNativeStackNavigator();

export type RecordParamList = {
  RecordScreen: undefined;
  EditNameScreen: undefined;
  RouteSettingScreen: undefined;
};

const RouteRecordScreen = () => {
  return (
    <Stack.Navigator initialRouteName="RecordScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="RecordScreen" component={RecordScreen} />
      <Stack.Screen name="EditNameScreen" component={EditNameScreen} />
      <Stack.Screen name="RouteSettingScreen" component={RouteSettingScreen} />
    </Stack.Navigator>
  );
};

export default RouteRecordScreen;
