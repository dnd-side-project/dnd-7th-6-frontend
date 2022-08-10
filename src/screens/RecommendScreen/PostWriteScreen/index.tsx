import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import useHideTabBar from 'src/hooks/useHideTabBar';
import {RecommendScreenProps} from '../RecommendScreen';

import PostWriteMainScreen from './AddPhotoScreen';
import SelectTagScreen from './SelectTagScreen';

const Stack = createNativeStackNavigator();

export type PostWriteParamList = {
  PostWriteMain: undefined;
};

const RoutePostWriteScreen = () => {
  useHideTabBar();

  return (
    <Stack.Navigator initialRouteName="PostWriteMain" screenOptions={{headerShown: false}}>
      <Stack.Screen name="PostWriteMain" component={PostWriteMainScreen} />
      <Stack.Screen name="SelectTag" component={SelectTagScreen} />
    </Stack.Navigator>
  );
};

export default RoutePostWriteScreen;
