import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import PermissionOrganism from 'src/components/PermissionOrganism';

const Stack = createNativeStackNavigator();
const PermissionScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Permission">
      <Stack.Screen name="Permission" component={PermissionOrganism} />
    </Stack.Navigator>
  );
};

export default PermissionScreen;
