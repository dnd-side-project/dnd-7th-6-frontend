import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import LocationTermsOrganism from 'src/components/Terms/LocationTermsOrganism';
import PrivacyTermsOrganism from 'src/components/Terms/PrivacyTermsOrganism';
import ServiceTermsOrganism from 'src/components/Terms/ServiceTermsOrganism';
import TermsOrganism from 'src/components/Terms/TermsOrganism';

const Stack = createNativeStackNavigator();

export type TermsParamList = {
  TermsScreen: {email: string};
};

const TermsScreen = ({route}: NativeStackScreenProps<TermsParamList, 'TermsScreen'>) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="TermsScreen">
      <Stack.Screen name="TermsScreen" component={TermsOrganism} initialParams={route.params} />
      <Stack.Screen name="ServiceTermsScreen" component={ServiceTermsOrganism} />
      <Stack.Screen name="PrivacyTermsScreen" component={PrivacyTermsOrganism} />
      <Stack.Screen name="LocationTermsScreen" component={LocationTermsOrganism} />
    </Stack.Navigator>
  );
};

export default TermsScreen;
