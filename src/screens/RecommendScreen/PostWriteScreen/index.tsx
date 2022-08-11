import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import PostWriteMainScreen from './AddPhotoScreen';
import ExitPostWriteScreen from './ExitPostWriteScreen';
import SelectTagScreen from './SelectTagScreen';
import SummaryScreen from './SummaryScreen';

import useHideTabBar from 'src/hooks/useHideTabBar';

const Stack = createNativeStackNavigator();

export type PostWriteParamList = {
  PostWriteMain: undefined;
  SelectTag: undefined;
  Summary: undefined;
  ExitPostWrite: undefined;
};

const RoutePostWriteScreen = () => {
  useHideTabBar();

  return (
    <Stack.Navigator initialRouteName="PostWriteMain" screenOptions={{headerShown: false}}>
      <Stack.Screen name="PostWriteMain" component={PostWriteMainScreen} />
      <Stack.Screen name="SelectTag" component={SelectTagScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen name="ExitPostWrite" component={ExitPostWriteScreen} />
    </Stack.Navigator>
  );
};

export default RoutePostWriteScreen;
