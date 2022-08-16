import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import RouteKeywordSearchScreen from './KeywordSearchScreen';
import PostListDetailScreen from './PostListDetailScreen';
import RoutePostWriteScreen from './PostWriteScreen';
import RecommendDetailScreen from './RecommendDetailScreen';
import RecommendScreen from './RecommendScreen';

const Stack = createNativeStackNavigator();

export type RecommendParamList = {
  RecommendScreen: undefined;
  RecommendDetail: {postId: number};
  PostListDetail: undefined;
};

const RouteRecommendScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Recommend" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Recommend" component={RecommendScreen} />
      <Stack.Screen name="RecommendDetail" component={RecommendDetailScreen} />
      <Stack.Screen name="RouteKeywordSearch" component={RouteKeywordSearchScreen} />
      <Stack.Screen name="PostListDetail" component={PostListDetailScreen} />
      <Stack.Screen
        name="RoutePostWrite"
        component={RoutePostWriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RouteRecommendScreen;
