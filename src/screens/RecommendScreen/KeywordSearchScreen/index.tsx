import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import RecommendResultScreen from './RecommendResultScreen';
import RecommendSearchScreen from './RecommendSearchScreen';

const Stack = createNativeStackNavigator();

export type RecommendSearchParamList = {
  RecommendSearch: undefined;
  RecommendResult: {title: string; id: number};
};

const RouteKeywordSearchScreen = () => {
  return (
    <Stack.Navigator initialRouteName="RecommendSearch" screenOptions={{headerShown: false}}>
      <Stack.Screen name="RecommendSearch" component={RecommendSearchScreen} />
      <Stack.Screen name="RecommendResult" component={RecommendResultScreen} />
    </Stack.Navigator>
  );
};

export default RouteKeywordSearchScreen;
