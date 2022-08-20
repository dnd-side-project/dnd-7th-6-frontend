import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import BoothDetailScreen from './BoothDetailScreen';
import BoothImageScreen from './BoothImageScreen';
import BoothScreen from './BoothScreen';
import BoothSearchScreen from './BoothSearchScreen';
import RoutePostReviewScreen from './PostReviewScreen';
import ReviewImageDetailScreen from './ReviewImageDetailScreen';

import {ReviewImage} from 'src/types';

const Stack = createNativeStackNavigator();

export type BoothParamList = {
  BoothScreen: undefined;
  BoothSearchScreen: undefined;
  BoothDetailScreen: {id: number; distance: number};
  BoothReviewScreen: {placeName: string; boothId: string};
  BoothImageScreen: {boothId: number};
  ReviewImageDetailScreen: {boothId?: number; targetImage: ReviewImage};
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
      <Stack.Screen
        name="ReviewImageDetail"
        component={ReviewImageDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RouteBoothScreen;
