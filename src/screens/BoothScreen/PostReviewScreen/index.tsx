import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import BoothImageReviewScreen from './BoothImageReviewScreen';
import BoothResultReviewScreen from './BoothResultReviewScreen';
import BoothReviewCompleteScreen from './BoothReviewCompleteScreen';
import BoothStoreReviewScreen from './BoothStoreReviewScreen';

const Stack = createNativeStackNavigator();

export type PostReviewParamList = {
  BoothStoreReviewScreen: undefined;
  BoothResultReviewScreen: undefined;
  BoothImageReviewScreen: undefined;
  BoothReviewCompleteScreen: undefined;
};

const RoutePostReviewScreen = () => {
  return (
    <Stack.Navigator initialRouteName="BoothStoreReview">
      <Stack.Screen name="BoothStoreReview" component={BoothStoreReviewScreen} />
      <Stack.Screen name="BoothResultReview" component={BoothResultReviewScreen} />
      <Stack.Screen name="BoothImageReview" component={BoothImageReviewScreen} />
      <Stack.Screen name="BoothReviewComplete" component={BoothReviewCompleteScreen} />
    </Stack.Navigator>
  );
};

export default RoutePostReviewScreen;
