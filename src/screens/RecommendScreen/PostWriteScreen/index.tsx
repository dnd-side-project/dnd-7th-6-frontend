import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import useHideTabBar from 'src/hooks/useHideTabBar';

import PostWriteMainScreen from './AddPhotoScreen';
import SelectTagScreen from './SelectTagScreen';
import SummaryScreen from './SummaryScreen';

const Stack = createNativeStackNavigator();

export type PostWriteParamList = {
  PostWriteMain: undefined;
  SelectTag: undefined;
  Summary: undefined;
};

const RoutePostWriteScreen = () => {
  useHideTabBar();

  return (
    <Stack.Navigator initialRouteName="Summary" screenOptions={{headerShown: false}}>
      <Stack.Screen name="PostWriteMain" component={PostWriteMainScreen} />
      <Stack.Screen name="SelectTag" component={SelectTagScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
    </Stack.Navigator>
  );
};

export default RoutePostWriteScreen;
