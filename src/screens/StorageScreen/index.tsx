import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import StorageScreen from './StorageScreen';

const Stack = createNativeStackNavigator();

export type StorageParamList = {
  Storage: undefined;
};

const RouteStorageScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Storage">
      <Stack.Screen name="Storage" component={StorageScreen} />
    </Stack.Navigator>
  );
};

export default RouteStorageScreen;
