import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import BoothScreen from './BoothScreen';
import BoothSearchScreen from './BoothSearchScreen';

const Stack = createNativeStackNavigator();

export type BoothParamList = {
  BoothScreen: undefined;
  BoothSearchScreen: undefined;
};

const RouteBoothScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Booth">
      <Stack.Screen name="Booth" component={BoothScreen} />
      <Stack.Screen name="BoothSearch" component={BoothSearchScreen} />
    </Stack.Navigator>
  );
};

export default RouteBoothScreen;
