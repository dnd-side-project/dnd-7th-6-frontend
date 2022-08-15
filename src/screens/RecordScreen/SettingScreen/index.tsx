import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import PersonalProcessScreen from './PersonalProcessScreen';
import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

export type SettingParamList = {
  DetailSettingScreen: undefined;
  PersonalProcessScreen: undefined;
};

const RouteSettingScreen = () => {
  return (
    <Stack.Navigator initialRouteName="DetailSetting" screenOptions={{headerShown: false}}>
      <Stack.Screen name="DetailSetting" component={SettingScreen} />
      <Stack.Screen name="PersonalProcess" component={PersonalProcessScreen} />
    </Stack.Navigator>
  );
};

export default RouteSettingScreen;
