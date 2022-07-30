import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import RecommendDetailScreen from './RecommendDetailScreen';
import RecommendScreen from './RecommendScreen';

const Stack = createNativeStackNavigator();

export type RecommendParamList = {
  RecommendScreen: undefined;
  RecommendDetail: undefined; //TO-DO {imgId: string};
};

const RouteRecommendScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Recommend">
      <Stack.Screen name="Recommend" component={RecommendScreen} />
      <Stack.Screen name="RecommendDetail" component={RecommendDetailScreen} />
    </Stack.Navigator>
  );
};

export default RouteRecommendScreen;