import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import BoothDetailScreen from './BoothDetailScreen';
import BoothImageScreen from './BoothImageScreen';
import BoothScreen from './BoothScreen';
import BoothSearchScreen from './BoothSearchScreen';
import RoutePostReviewScreen from './PostReviewScreen';

const Stack = createNativeStackNavigator();

export type BoothParamList = {
  BoothScreen: undefined;
  BoothSearchScreen: undefined;
  BoothDetailScreen: {id: number; distance: number};
  BoothReviewScreen: {placeName: string; boothId: string};
  BoothImageScreen: {reviewId: number};
};

const RouteBoothScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Booth">
      <Stack.Screen name="Booth" component={BoothScreen} />
      <Stack.Screen name="BoothSearch" component={BoothSearchScreen} />
      <Stack.Screen name="BoothDetail" component={BoothDetailScreen} />
      <Stack.Screen
        name="BoothReview"
        component={RoutePostReviewScreen}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen name="BoothImage" component={BoothImageScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default RouteBoothScreen;
