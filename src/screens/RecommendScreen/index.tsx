import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import DiffUserPostScreen from './DiffUserPostScreen';
import RouteKeywordSearchScreen from './KeywordSearchScreen';
import PostListDetailScreen from './PostListDetailScreen';
import RoutePostWriteScreen from './PostWriteScreen';
import RecommendDetailScreen from './RecommendDetailScreen';
import RecommendScreen from './RecommendScreen';

const Stack = createNativeStackNavigator();

export type RecommendParamList = {
  RecommendScreen: undefined;
  RecommendDetail: {postId: number; isRecord?: boolean; isStorage?: boolean};
  PostListDetail: undefined;
  DiffUserPost: {userId: number; username: string};
  RoutePostWrite: {isModifyMode?: boolean};
};

const RouteRecommendScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Recommend">
      <Stack.Screen name="Recommend" component={RecommendScreen} options={{headerShown: false}} />
      <Stack.Screen
        name="RecommendDetail"
        component={RecommendDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RouteKeywordSearch"
        component={RouteKeywordSearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostListDetail"
        component={PostListDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DiffUserPost"
        component={DiffUserPostScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RoutePostWrite"
        component={RoutePostWriteScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default RouteRecommendScreen;
