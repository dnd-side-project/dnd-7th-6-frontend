import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';

import {BoothParamList} from '..';
import BoothImageReviewScreen from './BoothImageReviewScreen';
import BoothResultReviewScreen from './BoothResultReviewScreen';
import BoothReviewCompleteScreen from './BoothReviewCompleteScreen';
import BoothStoreReviewScreen from './BoothStoreReviewScreen';
import BoothTagInputScreen from './BoothTagInputScreen';

const Stack = createNativeStackNavigator();

export type PostReviewParamList = {
  BoothStoreReviewScreen: {placeName: string; boothId: number};
  BoothTagInputScreen: undefined;
  BoothResultReviewScreen: {placeName: string; boothId: number};
  BoothImageReviewScreen: {placeName: string; boothId: number};
  BoothReviewCompleteScreen: {placeName: string; boothId: number};
};
type Props = NativeStackScreenProps<BoothParamList, 'BoothReviewScreen'>;

const RoutePostReviewScreen = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName="BoothStoreReview" screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="BoothStoreReview"
        component={BoothStoreReviewScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen
        name="BoothTagInput"
        component={BoothTagInputScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen
        name="BoothResultReview"
        component={BoothResultReviewScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen
        name="BoothImageReview"
        component={BoothImageReviewScreen}
        initialParams={props.route.params}
      />
      <Stack.Screen
        name="BoothReviewComplete"
        component={BoothReviewCompleteScreen}
        initialParams={props.route.params}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default RoutePostReviewScreen;
