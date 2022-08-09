import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import PostWriteMainScreen from './PostWriteMainScreen';
import SelectTagScreen from './SelectTagScreen';

const Stack = createNativeStackNavigator();

export type PostWriteParamList = {
  PostWriteMain: undefined;
};

const RoutePostWriteScreen = () => {
  return (
    <Stack.Navigator initialRouteName="PostWriteMain">
      <Stack.Screen name="PostWriteMain" component={PostWriteMainScreen} />
      <Stack.Screen name="SelectTag" component={SelectTagScreen} />
    </Stack.Navigator>
  );
};

export default RoutePostWriteScreen;
