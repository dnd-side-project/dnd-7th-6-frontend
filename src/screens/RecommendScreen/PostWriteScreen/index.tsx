import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {RecommendParamList} from '..';
import PostWriteMainScreen from './AddPhotoScreen';
import CustomTagScreen from './CustomTagScreen';
import ExitPostWriteScreen from './ExitPostWriteScreen';
import SelectTagScreen from './SelectTagScreen';
import SummaryScreen from './SummaryScreen';

import usePostWriteTabBar from 'src/hooks/usePostWriteTabBar';

const Stack = createNativeStackNavigator();

export type PostWriteScreenProps = NativeStackScreenProps<RecommendParamList, 'RoutePostWrite'>;

export type PostWriteParamList = {
  PostWriteMain: undefined;
  SelectTag: {isModifyMode?: boolean};
  CustomTag: {isModifyMode?: boolean};
  Summary: undefined;
  ExitPostWrite: undefined;
};

const RoutePostWriteScreen = ({route}: PostWriteScreenProps) => {
  usePostWriteTabBar();

  return (
    <Stack.Navigator
      initialRouteName={route.params?.isModifyMode ? 'Summary' : 'PostWriteMain'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="PostWriteMain" component={PostWriteMainScreen} />
      <Stack.Screen name="SelectTag" component={SelectTagScreen} />
      <Stack.Screen name="CustomTag" component={CustomTagScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen
        name="ExitPostWrite"
        component={ExitPostWriteScreen}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default RoutePostWriteScreen;
