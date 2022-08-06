import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import BoothDetailScreen from './BoothDetailScreen';
import BoothImageReviewScreen from './BoothImageReviewScreen';
import BoothResultReviewScreen from './BoothResultReviewScreen';
import BoothScreen from './BoothScreen';
import BoothSearchScreen from './BoothSearchScreen';
import BoothStoreReviewScreen from './BoothStoreReviewScreen';

const Stack = createNativeStackNavigator();

export type BoothParamList = {
  BoothScreen: undefined;
  BoothSearchScreen: undefined;
  BoothDetailScreen: undefined;
  BoothStoreReviewScreen: {placeName: string; boothId: string};
  BoothResultReviewScreen: {placeName: string; boothId: string};
  BoothImageReviewScreen: {placeName: string; boothId: string};
};

const RouteBoothScreen = () => {
  return (
    <Stack.Navigator initialRouteName="BoothDetail">
      <Stack.Screen name="Booth" component={BoothScreen} />
      <Stack.Screen name="BoothSearch" component={BoothSearchScreen} />
      <Stack.Screen name="BoothDetail" component={BoothDetailScreen} />
      <Stack.Screen name="BoothStoreReview" component={BoothStoreReviewScreen} />
      <Stack.Screen name="BoothResultReview" component={BoothResultReviewScreen} />
      <Stack.Screen name="BoothImageReview" component={BoothImageReviewScreen} />
    </Stack.Navigator>
  );
};

export default RouteBoothScreen;
