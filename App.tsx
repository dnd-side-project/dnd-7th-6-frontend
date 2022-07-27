import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import BoothScreen from 'src/screens/BoothScreen/BoothScreen';
import MyScreen from 'src/screens/MyScreen/MyScreen';
import RecommendScreen from 'src/screens/RecommendScreen/RecommendScreen';
import StorageScreen from 'src/screens/StorageScreen/StorageScreen';

export type RootParamList = {
  BoothScreen: undefined;
  RecommendScreen: undefined;
  StorageScreen: undefined;
  MyScreen: undefined;
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'BoothScreen'} component={BoothScreen} />
        <Tab.Screen name={'RecommendScreen'} component={RecommendScreen} />
        <Tab.Screen name={'StorageScreen'} component={StorageScreen} />
        <Tab.Screen name={'MyScreen'} component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
