import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import PostWriteMainScreen from './AddPhotoScreen';
import ExitPostWriteScreen from './ExitPostWriteScreen';
import SelectTagScreen from './SelectTagScreen';
import SummaryScreen from './SummaryScreen';

import usePostWriteTabBar from 'src/hooks/usePostWriteTabBar';

const Stack = createNativeStackNavigator();

export type PostWriteParamList = {
  PostWriteMain: undefined;
  SelectTag: {isModifyMode?: boolean};
  Summary: undefined;
  ExitPostWrite: undefined;
};

const RoutePostWriteScreen = () => {
  usePostWriteTabBar();

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
