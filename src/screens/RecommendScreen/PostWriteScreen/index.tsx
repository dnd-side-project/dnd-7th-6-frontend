import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import PostWriteMainScreen from './PostWriteMainScreen';

const Stack = createNativeStackNavigator();

export type BoothParamList = {
  PostWriteMainScreen: undefined;
};

const RoutePostWriteScreen = () => {
  return (
    <Stack.Navigator initialRouteName="PostWriteMain">
      <Stack.Screen name="PostWriteMain" component={PostWriteMainScreen} />
    </Stack.Navigator>
  );
};

export default RoutePostWriteScreen;
