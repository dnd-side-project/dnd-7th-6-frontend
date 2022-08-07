import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import BoothDetailScreen from './BoothDetailScreen';
import BoothScreen from './BoothScreen';
import BoothSearchScreen from './BoothSearchScreen';
import RoutePostReviewScreen from './PostReviewScreen';

const Stack = createNativeStackNavigator();

export type BoothParamList = {
  BoothScreen: undefined;
  BoothSearchScreen: undefined;
  BoothDetailScreen: undefined;
  BoothReviewScreen: {placeName: string; boothId: string};
};

const RouteBoothScreen = () => {
  return (
    <Stack.Navigator initialRouteName="BoothDetail">
      <Stack.Screen name="Booth" component={BoothScreen} />
      <Stack.Screen name="BoothSearch" component={BoothSearchScreen} />
      <Stack.Screen name="BoothDetail" component={BoothDetailScreen} />
      <Stack.Screen
        name="BoothReview"
        component={RoutePostReviewScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RouteBoothScreen;
