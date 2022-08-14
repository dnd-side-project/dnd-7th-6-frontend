import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from './LoginScreen';
const Stack = createNativeStackNavigator();
const RouteLoginScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AppInner">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default RouteLoginScreen;
