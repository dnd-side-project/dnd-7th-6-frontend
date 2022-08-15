import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

export type SettingParamList = {
  SettingScreen: undefined;
};

const RouteSettingScreen = () => {
  return (
    <Stack.Navigator initialRouteName="DetailSetting" screenOptions={{headerShown: false}}>
      <Stack.Screen name="DetailSetting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default RouteSettingScreen;
